import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import BlogForm from "./blog-form";

function EditBlog() {
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                setBlog(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("blog detail error:", error);
            });
    }, [id]);

    return (
        <div className="new-edit-blog-container">
            <h1 className="new-edit-blog-title">Edit Blog</h1>
            <hr />
            {isLoading && <p>Loading...</p>}
            {!isLoading && <BlogForm blog={blog} />}

            <Link to={`/blogs/${id}`} className="new-edit-blog-btn">Back to Blog</Link>
            <Link to="/blogs" className="new-edit-blog-btn">Back to Blogs</Link>
        </div>
    );
}

export default EditBlog;