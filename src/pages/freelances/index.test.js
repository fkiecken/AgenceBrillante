import Freelances from '.'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'
import Card from '../../components/Card'

describe('Freelances Page', () => {
  test('Should render without crash', async () => {
    render(
      <ThemeProvider>
        <Freelances />
      </ThemeProvider>
    )
  })
  test('Title change when we add it on favorite', () => {
    render(
      <ThemeProvider>
        <Freelances>
          <containerFreelances>
            <containerAllCards></containerAllCards>
          </containerFreelances>
        </Freelances>
      </ThemeProvider>
    )
    screen.debug()
  })
})
