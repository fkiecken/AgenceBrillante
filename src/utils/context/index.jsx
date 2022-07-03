import { createContext, useState } from 'react'

export const ThemeContext = createContext()
export const ResultSurveyContext = createContext()


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

export const SurveyProdvider = () => {
  const resultSurvey = [
    {
      questionNumber: 1,
      answer : null,
    },
    {
      questionNumber: 2,
      answer : null,
    },    
    {
      questionNumber: 3,
      answer : null,
    },    
    {
      questionNumber: 4,
      answer : null,
    },    
    {
      questionNumber: 5,
      answer : null,
    },    
    {
      questionNumber: 6,
      answer : null,
    },
  ]
/*
  const toggleResultSurvey = (QuestionNumber, ResultAnswer) => {
    resultSurvey.findIndex(QuestionNumber)(object => {
      object.Answer = ResultAnswer
    })
  }
*/
  return (
    <SurveyProdvider.Provider>
    </SurveyProdvider.Provider>
  )
}
