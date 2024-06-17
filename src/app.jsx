import React from 'react'

import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import View from './Components/View';
import CustomerInformationFormPage1 from './Components/CustomerInformationFormPage1';

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
