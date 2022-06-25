import React from 'react'
import Home from './pages/home'
import Survey from './pages/survey'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Result from './pages/result'
import Freelances from './pages/freelances'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const GlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  h1 {
    color: #a0cecb;
    padding-top: 20px;
    padding-left: 20px;
  }
`

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/survey/:questionNumber" element={<Survey />} />
      <Route exact path="/result" element={<Result />} />
      <Route exact path="/freelances" element={<Freelances />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
</React.StrictMode>
)
