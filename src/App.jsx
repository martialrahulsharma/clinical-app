import React from 'react'
import PatientForm from './component/PatientForm'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewPatient from './component/NewPatient';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<PatientForm key="unique1" />} />           
          <Route exact path="/showPatients" element={<NewPatient key="unique2" />} />           
        </Routes>
      </Router>
    </>
  )
}

export default App
