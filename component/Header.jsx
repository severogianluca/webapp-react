import NavBar from "./NavBar"

function Header(){
    return(
        <>
        <div className="bg-primary">
            <NavBar/>
            <div style={{ height: "40px" }}></div> 
        </div>
        </>
    )
}

export default Header