import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import PortfolioForm from "./portfolio-form";

function EditPortfolio() {
    const [portfolio, setPortfolio] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/portfolios/${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("portfolio_token")}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setPortfolio(data);
                setIsLoading(false);
            })
            .catch((err) => console.log('portfolio error:', err));
    }, [id]);

    return (
        <div>
            <h1>Edit Portfolio</h1>
            <hr />
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
                <PortfolioForm portfolio={portfolio} />
            )}
            <Link to={`/portfolios/${id}`} className="btn btn-primary">Back to Portfolio</Link>
            <Link to="/portfolios" className="btn btn-primary">Back to Portfolios</Link>
        </div>
    );
}

export default EditPortfolio;