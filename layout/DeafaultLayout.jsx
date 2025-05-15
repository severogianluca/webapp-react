
import { Outlet } from "react-router-dom";
import Header from "../component/Header"
import Loader from "../component/Loader";
import GlobalContext from "../context/globalContext";
import { useContext } from "react";

function DefaultLayout(){

    const{ isLoading } = useContext(GlobalContext)

    return(
        <>
        <Header/>
        <main>
            {isLoading && <Loader/>}
            <Outlet/>
            
        </main>
        
        </>
    )
}

export default DefaultLayout