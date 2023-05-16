import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import CategoryItem from "./category-item";
import { UserContext } from "../store/user-context";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/categories', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('portfolio_token'),
            }
        })
        .then(response => response.json())
        .then(data => {
            setCategories(data);
            setIsLoading(false);
        })
        .catch(error => console.log('error: ', error));
    }, []);

    let categoryList = categories.map(category => <CategoryItem key={category.id} category={category} />);

    return (
        <div>
            <h1>Categories</h1>
            {user.role === 'site_admin' && <Link to="/categories/new" className="btn btn-primary">New Category</Link>}
            <hr />
            <div>
                {categories.length === 0 && <div>No categories found.</div>}
                {isLoading && <div>Loading...</div>}
                {!isLoading && categoryList}
            </div>
            <Link to="/admin">Back to Admin</Link>
        </div>
    );
}

export default Categories;