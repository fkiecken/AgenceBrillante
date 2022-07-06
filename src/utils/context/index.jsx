import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
  var resultSurvey = [
    {
      questionNumber: 1,
      answerQuestion: 'null',
    },
    {
      questionNumber: 2,
      answerQuestion: 'null',
    },
    {
      questionNumber: 3,
      answerQuestion: 'null',
    },
    {
      questionNumber: 4,
      answerQuestion: 'null',
    },
    {
      questionNumber: 5,
      answerQuestion: 'null',
    },
    {
      questionNumber: 6,
      answerQuestion: 'null',
    },
  ]

  return (
    <SurveyContext.Provider value={{ resultSurvey }}>
      {children}
    </SurveyContext.Provider>
  )
}
