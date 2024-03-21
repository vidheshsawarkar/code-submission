import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { InputForm } from './components/InputForm'
import { Table } from './components/Table'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/submission/post" element={<InputForm />} />
          <Route path="/submission/all" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App