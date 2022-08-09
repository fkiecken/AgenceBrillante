import Freelances from '.'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Freelances Page', () => {
  test('Should render without crash', async () => {
    render(
      <ThemeProvider>
        <Freelances />
      </ThemeProvider>
    )
  })
})
