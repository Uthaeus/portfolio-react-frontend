import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { UserContext } from "../store/user-context";

function BlogDetail() {
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {

    }, []);

    return (
        <div className="blog-detail-container">
            {isLoading && <p>Loading...</p>}
            { !isLoading && (
                <>
                    <div>
                        <img src={blog?.main_image} alt={blog?.title} width='600px' height='400px' />
                    </div>
                    <div>
                        <h1>{blog?.title}</h1>
                        <p>{blog?.body}</p>
                    </div>

                    <div>
                        <Link to={`/blogs/${id}/edit`} className="btn btn-success">Edit</Link>
                        <Link className="btn btn-danger">Delete</Link>
                        <Link to="/blogs" className="btn btn-primary">Back to Blogs</Link>
                    </div>
                </>
            )}
        </div>
    );
}