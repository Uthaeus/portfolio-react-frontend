import { NavLink } from "react-router-dom";

function MainNavigation() {

    function logoutHandler() {
        console.log('logoutHandler');
    }

    return (
        <nav className="main-nav-container">
            <div className="welcome-wrapper">
                Logo
            </div>

            <div className="links-wrapper">
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'} end>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact</NavLink>
                <NavLink to="/blogs" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Blogs</NavLink>
            </div>

            <div className="auth-links-wrapper">
                <NavLink to="/auth/sign-up" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign Up</NavLink>
                <NavLink to="/auth/sign-in" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign In</NavLink>
                <button onClick={logoutHandler} className="logout-btn">Sign Out</button>
            </div>
        </nav>
    );
}

export default MainNavigation;