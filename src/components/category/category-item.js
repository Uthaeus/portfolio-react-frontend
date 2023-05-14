import { Link } from "react-router-dom";

function CategoryItem({ category }) {
    return (
        <Link to='#' className="category-item">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
        </Link>
    )
}

export default CategoryItem;