import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../layout/DeafaultLayout'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route  element={<DefaultLayout/>}>
            <Route path="/" element={<div>sono del main</div>} />
            
            <Route path="/:id" element={<div>sono nella scheda</div>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

