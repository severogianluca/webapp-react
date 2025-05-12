
import { Outlet } from "react-router-dom";
import Header from "../component/Header"

function DefaultLayout(){
    return(
        <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default DefaultLayout