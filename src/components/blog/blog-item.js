import { Link } from "react-router-dom";

function BlogItem({ blog }) {

    return (
        <Link className="blog-item-container">
            <h2 className="blog-item-title">{blog.title}</h2>
        </Link>
    );
}

export default BlogItem;