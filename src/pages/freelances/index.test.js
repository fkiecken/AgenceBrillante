import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { render } from '../../utils/test'
import Freelances from '.'

const freelancersMockedData = [
  {
    name: 'Elon Musk',
    job: 'Pas trop mal en SEO',
    picture: '',
  },
  {
    name: 'Mark Zuckerberg',
    job: 'Développeur backend askip',
    picture: '',
  },
]

const server = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())

describe('Freelances Page', () => {
  test('Should render without crash', async () => {
    render(<Freelances />)
    expect(screen.getByTestId('loader')).toBeTruthy()
  })
  test('Should display freelancers names', async () => {
    render(<Freelances />)
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    await waitFor(() => {
      expect(screen.getByText('Elon Musk')).toBeTruthy()
      expect(screen.getByText('Mark Zuckerberg')).toBeTruthy()
    })
  })
})

it('Should display error content', async () => {
  server.use(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
      return res.once(
        ctx.status(500),
        ctx.json({
          errorMessage: `Oups, il y a eu un problème avec l'API`,
        })
      )
    })
  )
  render(<Freelances />)
  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  expect(screen.getByTestId('error')).toMatchInlineSnapshot(`
<span
  data-testid="error"
>
  Oups, il y a eu un problème avec l'API
</span>
`)
})

afterAll(() => server.close())
