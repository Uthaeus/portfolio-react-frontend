import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../store/user-context";

function PortfolioNavigation() {
    const [navToggle, setNavToggle] = useState(false);
    const userCtx = useContext(UserContext);

    function logoutHandler() {
        fetch("http://localhost:4000/users/sign_out", {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("portfolio_token"),
            }
        })
            .then(response => {
                if (response.ok) {
                    userCtx.logout();
                    return response.json();
                }
                throw response;
            })
            .catch(error => console.log('portfolio logout error: ', error));
    }

    function navToggleHandler() {
        setNavToggle(!navToggle);
    }

    return (
        <div className="portfolio-navigation-container">
            {navToggle && (
                <div className="portfolio-nav-content-wrapper">
                    <div className="portfolio-nav-socials-wrapper">
                        <a className="portfolio-social-link" href="https://github.com/Uthaeus"><i className="bi bi-github"></i></a>
                        <a className="portfolio-social-link" href="https://www.linkedin.com/in/roman-lavery-software-dev/"><i className="bi bi-linkedin"></i></a>
                        <a className="portfolio-social-link" href="https://twitter.com/roman_lavery"><i className="bi bi-twitter"></i></a>
                        <a className="portfolio-social-link" href="https://www.facebook.com/roman.lavery"><i className="bi bi-facebook"></i></a>
                    </div>
                    <div className="portfolio-nav-links-wrapper">
                        <Link to="/" className="portfolio-nav-link">Home</Link>
                        <Link to="/about" className="portfolio-nav-link">About</Link>
                        <Link to="/contact" className="portfolio-nav-link">Contact</Link>
                        <Link to="/blogs" className="portfolio-nav-link">Blogs</Link>
                        <Link to="/portfolios" className="portfolio-nav-link">Portfolios</Link>

                    </div>
                    <div className="portfolio-nav-auth-links-wrapper">
                        {!userCtx.user && (
                            <>
                                <Link to="/auth/sign-up" className="portfolio-nav-link">Sign Up</Link>
                                <Link to="/auth/sign-in" className="portfolio-nav-link">Sign In</Link>
                            </>
                        )}
                        {userCtx.user?.role === "site_admin" && (
                            <Link to="/admin" className="portfolio-nav-link">Admin</Link>
                        )}
                        {userCtx.user && 
                                <Link className="portfolio-nav-link" onClick={logoutHandler}>Sign Out</Link>
                        }
                    </div>
                </div>
            )}

            <div className="portfolio-nav-wrapper">
                <div className="portfolio-nav-title-wrapper">
                    <p className="portfolio-nav-title">Homer J</p> 
                </div>

                <div className="portfolio-nav-toggle-wrapper">
                    <p className="portfolio-nav-toggle" onClick={navToggleHandler}>^</p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioNavigation;