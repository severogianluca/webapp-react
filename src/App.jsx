import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../layout/DeafaultLayout'

import './App.css'
import HomeListMovies from "../pages/HomeListMovies";
import DetailsMovies from "../pages/DetailsMovies";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route  element={<DefaultLayout/>}>
            <Route path="/" element={<HomeListMovies/>} />
            
            <Route path="/:id" element={<DetailsMovies/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

