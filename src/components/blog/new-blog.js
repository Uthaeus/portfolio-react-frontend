import { Link } from "react-router-dom";

import BlogForm from "./blog-form";

function NewBlog() {

    return (
        <div className="new-edit-blog-container">
            <h1 className="new-edit-blog-title">New Blog</h1>
            <hr />
            <BlogForm />

            <Link to="/blogs" className="new-edit-blog-btn">Back to Blogs</Link>
        </div>
    );
}

export default NewBlog;