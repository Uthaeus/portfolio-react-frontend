import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { UserContext } from "../store/user-context";

function PortfolioDetail() {
    const [portfolio, setPortfolio] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/portfolios/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPortfolio(data);
                setIsLoading(false);
            })
            .catch((err) => console.log('portfolio error:', err));
    }, [id]);

    function deleteHandler() {
        fetch(`http://localhost:4000/portfolios/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("portfolio_token")}`
            },
        })
            .then((res) => {
                if (res.ok) {
                    navigate("/portfolios");
                    return res.json();
                }
                throw res;
            })
            .catch((err) => console.log("delete error:", err));
    }

    return (
        <div>
            <h1>Portfolio Detail</h1>
            <hr />
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
                <div>
                    <h2>{portfolio.title}</h2>
                    <p>{portfolio.subtitle}</p>
                    <p>{portfolio.description}</p>
                    <img src={`http://localhost:4000${portfolio.main_image?.url}`} alt={portfolio.title} width='600px' height='400px' />
                </div>
            )}
            {user.role === "site_admin" && (
                <>
                    <Link to={`/portfolios/${id}/edit`} className="btn btn-success">Edit Portfolio</Link>
                    <button className="btn btn-danger" onClick={deleteHandler}>Delete Portfolio</button>
                </>
            )}
            <Link to="/portfolios" className="btn btn-primary">Back to Portfolios</Link>
        </div>
    );
}

export default PortfolioDetail;