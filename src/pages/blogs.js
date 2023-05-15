import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import BlogItem from "../components/blog/blog-item";
import { UserContext } from "../components/store/user-context";
import CategoryItem from "../components/category/category-item";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthorized } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then((response) => response.json())
      .then((data) => {
        console.log("blogs index data:", data);
        setBlogs(data.blogs);
        setCategories(data.categories);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("blogs index error:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h1 className="blogs-title">Blogs</h1>
        {isAuthorized && <Link to="/blogs/new" className="btn btn-primary">New Blog</Link>}
      </div>
      <hr />
      <div className="blogs-content">
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <div className="blogs-content-wrapper">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        )}
        
        <div className="blogs-sidebar">
          <div className="blogs-sidebar-header">
            <h2>Blog Categories</h2>
            <ul>
              {categories.map((category) => <CategoryItem key={category.id} category={category} />)}
            </ul>
          </div>
          <div className="blogs-sidebar-socials-wrapper">
            <h2>Socials</h2>
            <Link to="#" className="sidebar-social-link">Facebook</Link>
            <Link to="#" className="sidebar-social-link">Github</Link>
            <Link to="#" className="sidebar-social-link">Twitter</Link>
            <Link to="#" className="sidebar-social-link">LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
