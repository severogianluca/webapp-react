import { Link, NavLink } from "react-router-dom";


function NavBar() {
    return (
        <>
            <nav className="navbar navbar gradient-nav position-fixed w-100 mb-5 " data-bs-theme="dark">
                <div className="w-100 d-flex justify-content-center">
                    <ul className="d-flex gap-3 justify-content-center">
                        <li><Link to="/">Home Page</Link></li>
                        <li><NavLink to="/ChiSiamo">Chi siamo</NavLink></li>
                        
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default NavBar