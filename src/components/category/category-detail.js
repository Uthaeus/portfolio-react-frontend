import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CategoryDetail() {
    const { id } = useParams();
    const [category, setCategory] = useState({});

    console.log('category: ', category);

    useEffect(() => {

        fetch(`http://localhost:4000/categories/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('portfolio_token'),
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('data: ', data);
            setCategory(data);
        })
        .catch(error => console.log('category detail error: ', error));
    }, [id]);

    return (
        <div>
            <h1>Category Detail</h1>
            <hr />
            <div>{category.title}</div>
            <div>
                {category.blogs && category.blogs.map(blog => {
                    return (
                        <div key={blog.id}>
                            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                        </div>
                    );
                })}
            </div>
            <Link to='/categories'>Back to Categories</Link>
        </div>
    );
}

export default CategoryDetail;