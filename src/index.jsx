import React from 'react'
import Home from './pages/home'
import Survey from './pages/survey'
import Header from './components/Header'
import Error from './components/Error'
import Result from './pages/result'
import Freelances from './pages/freelances'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/survey/:questionNumber" element={<Survey />} />
      <Route exact path="/result" element={<Result />} />
      <Route exact path="/freelances" element={<Freelances />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
)
