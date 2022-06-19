import App from 'App'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from 'views/Login'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router