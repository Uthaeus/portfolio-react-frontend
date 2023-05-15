import { Link } from "react-router-dom";

function PortfolioItem({portfolio}) {

    let image = portfolio.thumb_image?.url ? `http://localhost:4000${portfolio.thumb_image.url}` : "https://placehold.co/400x300";

    return (
        <Link to={`/portfolios/${portfolio.id}`} className="portfolio-item">
            <h2>{portfolio.title}</h2>
            <img src={image} alt={portfolio.title} width='400px' height='300px' />
        </Link>
    );
}

export default PortfolioItem;