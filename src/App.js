import Main from "views/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddStation from "views/AddStation"

function App() {
  return (
    <BrowserRouter basename="/optimal-move">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/addStation" element={<AddStation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
