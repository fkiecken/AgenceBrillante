import Footer from '.'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Footer', () => {
  test('Should render without crash', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
  })
  test('Change theme', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    const nighModeButton = screen.getByRole('button')
    expect(nighModeButton.textContent).toBe('☀️')
    fireEvent.click(nighModeButton)
    expect(nighModeButton.textContent).toBe('🌙')
  })
})
