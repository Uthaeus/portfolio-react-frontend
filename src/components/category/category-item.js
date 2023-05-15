import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../store/user-context";

function CategoryItem({ category }) {
    const { user } = useContext(UserContext);

    function itemDeleteHandler() {
        console.log('Delete Category');

        fetch(`http://localhost:4000/categories/${category.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('portfolio_token'),
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .catch(error => console.log('category delete error: ', error));
    }

    return (
        <div className="category-item-wrapper">
            <Link to={`/categories/${category.id}`} className="category-item">
                <h3>{category.title}</h3>
            </Link>
            {user && user.role === 'site_admin' && (
                <div className="category-item-actions">
                    <button onClick={itemDeleteHandler} className="btn btn-danger">Delete</button>
                </div>
            )}
        </div>
    )
}

export default CategoryItem;