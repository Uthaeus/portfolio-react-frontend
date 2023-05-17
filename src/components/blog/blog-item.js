import { Link } from "react-router-dom";

function BlogItem({ blog }) {
    let blogUser = blog.user ? blog.user.username : 'Unknown';
    let blurb = blog.body.slice(0, 20) + "...";

    return (
        <Link to={`/blogs/${blog.id}`} className="blog-item-container">
            <h2 className="blog-item-title">{blog.title}</h2>
            <p className="blog-item-blurb">{blurb}</p>
            <p className="blog-item-user">Posted By: {blogUser}</p>
        </Link>
    );
}

export default BlogItem;