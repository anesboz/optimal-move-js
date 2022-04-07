import Main from 'views/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddStation from 'views/AddStation'
import AddOnglet from 'views/AddOnglet'
import React from 'react'
import TestsButtons from 'components/TestsButtons/TestsButtons'

function App() {
  return (
    <BrowserRouter basename="/optimal-move">
      <TestsButtons />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pageAddRow" element={<AddStation />} />
        <Route path="/addOnglet" element={<AddOnglet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
