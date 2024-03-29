import React from 'react'
import Home from './pages/home'
import Survey from './pages/survey'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Profile from './components/Profile'
import Result from './pages/result'
import Freelances from './pages/freelances'
import { ThemeProvider } from './utils/context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './utils/style/GlobalStyle'
import { SurveyProvider } from './utils/context'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SurveyProvider>
        <ThemeProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/survey/:questionNumber" element={<Survey />} />
            <Route exact path="/result" element={<Result />} />
            <Route exact path="/freelances" element={<Freelances />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </SurveyProvider>
    </BrowserRouter>
  </React.StrictMode>
)
