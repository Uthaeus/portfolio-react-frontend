import { Link } from "react-router-dom";

import BlogForm from "./blog-form";

function NewBlog() {

    return (
        <div>
            <h1>New Blog</h1>
            <hr />
            <BlogForm />

            <Link to="/blogs" className="btn btn-primary">Back to Blogs</Link>
        </div>
    );
}

export default NewBlog;