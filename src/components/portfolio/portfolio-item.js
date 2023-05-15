import { Link } from "react-router-dom";

function PortfolioItem({portfolio}) {

    let image = portfolio.thumb_image ? portfolio.thumb_image : "https://via.placeholder.com/400x300";

    return (
        <Link className="portfolio-item">
            <h2>{portfolio.title}</h2>
            <img src={image} alt={portfolio.title} width='400px' height='300px' />
        </Link>
    );
}

export default PortfolioItem;