import { render as rltRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SurveyProvider, ThemeProvider } from '../context'

function Wrapper({ children }) {
  return (
    <MemoryRouter>
      <ThemeProvider>
        <SurveyProvider>{children}</SurveyProvider>
      </ThemeProvider>
    </MemoryRouter>
  )
}

export function render(ui) {
  rltRender(ui, { wrapper: Wrapper })
}
