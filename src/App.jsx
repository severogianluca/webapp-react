import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../layout/DeafaultLayout'
import './App.css'
import HomeListMovies from "../pages/HomeListMovies";
import DetailsMovies from "../pages/DetailsMovies";
import ChiSiamo from "../pages/ChiSiamo";
import GlobalContext from "../context/globalContext";
import { useState } from "react";

function App() {

  const[isLoading, setIsLoading] = useState(false)


  return (
    <>
      <GlobalContext.Provider value={{isLoading, setIsLoading}}>
        <BrowserRouter>
          <Routes>

            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomeListMovies />} />
              <Route path="/ChiSiamo" element={<ChiSiamo />} />
              <Route path="/:id" element={<DetailsMovies />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App

