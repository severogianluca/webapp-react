import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../layout/DeafaultLayout'
import './App.css'
import HomeListMovies from "../pages/HomeListMovies";
import DetailsMovies from "../pages/DetailsMovies";
import ChiSiamo from "../pages/ChiSiamo";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route  element={<DefaultLayout/>}>
            <Route path="/" element={<HomeListMovies/>} />
            <Route path="/ChiSiamo" element={<ChiSiamo/>} />
            <Route path="/:id" element={<DetailsMovies/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

