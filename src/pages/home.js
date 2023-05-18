import { Link } from "react-router-dom";

import HomeFeaturedItem from "../components/home/home-featured-item";

function HomePage() {
    
    return (
        <div className="home-container">
            <div className="home-header">
                <h1 className="home-title">Welcome to my Portfolio</h1>
                <p className="home-subtitle">This is a place where I can share my thoughts and ideas with the world.</p>
                <div className="home-buttons">
                    <Link to='/blogs' className="home-button blog-btn">Read my blogs</Link>
                    <Link to='/portfolios' className="home-button portfolio-btn">View my portfolio</Link>
                    <Link to='/contact' className="home-button contact-btn">Contact me</Link>
                </div>
            </div>

            <div className="home-features">
                <HomeFeaturedItem />
            </div>
        </div>
    );
}

export default HomePage;