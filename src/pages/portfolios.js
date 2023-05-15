import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import PortfolioItem from "../components/portfolio/portfolio-item";
import { UserContext } from "../components/store/user-context";

function Portfolios() {
    const [portfolios, setPortfolios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:4000/portfolios")
            .then((res) => res.json())
            .then((data) => {
                setPortfolios(data);
                setIsLoading(false);
            })
            .catch((err) => console.log('portfolios error:', err));
    }, []);

    return (
        <div>
            <h1>Portfolios</h1>
            {user.role === "site_admin" && <Link to="/portfolios/new">Create Portfolio</Link>}
            <hr />
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
                <div>
                    {portfolios.map((portfolio) => <PortfolioItem key={portfolio.id} portfolio={portfolio} />)}
                </div>
            )}
        </div>
    );
}

export default Portfolios;

