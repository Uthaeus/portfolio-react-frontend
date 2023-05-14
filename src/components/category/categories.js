import { useState, useEffect } from "react";

import CategoryItem from "./category-item";

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/categories', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('portfolio_token'),
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('data: ', data);
            setCategories(data);
        })
        .catch(error => console.log('error: ', error));
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            <hr />
            <div>
                {categories.map(category => <CategoryItem key={category.id} category={category} />)}
            </div>
        </div>
    );
}

export default Categories;