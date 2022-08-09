import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          const { errorMessage } = await response.json()
          throw new Error(errorMessage)
        } else {
          const data = await response.json()
          setData(data)
        }
      } catch (err) {
        setError(err.message)
      } finally {
      }
      setLoading(false)
    }
    fetchData()
  }, [url])

  return { loading, data, error }
}

export function useTheme(theme) {
  const [backgroundColorBody, setBackgroundColorBody] = useState('#ffffff')
  const [backgroundColor, setBackgroundColor] = useState('#fcfcfc')
  const [borderColor, setBorderColor] = useState('e9e9e9')
  const [buttonColor, setButtonColor] = useState('ffffff')
  const [colorText, setColorText] = useState('000000')
  const [gradientBackgroundFooter, setGradientBackgroundFooter] = useState(
    'linear-gradient(180deg, rgba(252,252,252,1) 0%, rgba(255,255,255,1) 100%)'
  )

  useEffect(() => {
    if (theme === 'light') {
      setBackgroundColorBody('#ffffff')
      setBackgroundColor('fcfcfc')
      setBorderColor('e9e9e9')
      setButtonColor('ffffff')
      setColorText('000000')
      setGradientBackgroundFooter(
        'linear-gradient(180deg, rgba(252,252,252,1) 0%, rgba(255,255,255,1) 100%)'
      )
    }
    if (theme === 'dark') {
      setBackgroundColorBody('#323639')
      setBackgroundColor('535659')
      setBorderColor('acacac')
      setButtonColor('5f6e7a')
      setColorText('ffffff')
      setGradientBackgroundFooter(
        'linear-gradient(180deg, rgba(83,86,89,1) 0%, rgba(50,54,57,1) 100%)'
      )
    }
  }, [theme])

  return {
    backgroundColorBody,
    backgroundColor,
    borderColor,
    buttonColor,
    colorText,
    gradientBackgroundFooter,
  }
}
