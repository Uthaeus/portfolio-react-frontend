import { Link } from "react-router-dom";

function BlogItem({ blog }) {
    let blogUser = blog.user ? blog.user.username : 'Unknown';

    return (
        <Link to={`/blogs/${blog.id}`} className="blog-item-container">
            <h2 className="blog-item-title">{blog.title}</h2>
            <p className="blog-item-user">By: {blogUser}</p>
        </Link>
    );
}

export default BlogItem;