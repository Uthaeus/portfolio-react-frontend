import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../store/user-context";

function BlogNavigation() {
    const userCtx = useContext(UserContext);

    let welcomeName = userCtx.user ? userCtx.user.username : "Guest";

    function logoutHandler() {
        console.log('logoutHandler');

        fetch('http://localhost:4000/users/sign_out', {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('portfolio_token'),
            }
        })
        .then(response => {
            if (response.ok) {
                localStorage.removeItem('portfolio_token');
                userCtx.logout();
            }
        })
        .catch(error => console.log('logout error: ', error));
    }

    return (
        <nav className="blog-nav-container">
            <div className="blog-welcome-wrapper">
                <p className="blog-nav-welcome">Welcome, <span className="welcome-name">{welcomeName}</span></p>
            </div>

            <div className="blog-links-wrapper">
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'} end>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact</NavLink>
                <NavLink to="/blogs" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Blogs</NavLink>
                <NavLink to="/portfolios" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Portfolios</NavLink>
            </div>

            <div className="auth-links-wrapper">
                {userCtx.user && <button onClick={logoutHandler} className="logout-btn"><i className="bi bi-door-open-fill"></i></button>}
                {userCtx.user && userCtx.user.role === 'site_admin' && <Link to='/admin' className="nav-link"><i className="bi bi-person-lines-fill"></i></Link>}
                {!userCtx.user && (
                    <>
                        <NavLink to="/auth/sign-up" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign Up</NavLink>
                        <NavLink to="/auth/sign-in" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign In</NavLink>
                    </>
                )}
                
            </div>
        </nav>
    );
}

export default BlogNavigation;