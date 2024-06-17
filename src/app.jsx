import React from 'react'
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import View from './Components/View';


const app = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/view-customer" element={<View />} />
      </Routes>
    </Router>
  )
}

export default app
