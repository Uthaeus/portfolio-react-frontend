import { NavLink } from "react-router-dom";

function MainNavigation() {

    function logoutHandler() {
        console.log('logoutHandler');
    }

    return (
        <nav className="main-nav-container">
            <div>
                Logo
            </div>
            <div>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
            </div>

            <div>
                <NavLink to="/auth/sign-up">Sign Up</NavLink>
                <NavLink to="/auth/sign-in">Sign In</NavLink>
                <button onClick={logoutHandler}>Sign Out</button>
            </div>
        </nav>
    );
}

export default MainNavigation;