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
        setBlogs(data.blogs);
        setCategories(data.categories);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("blogs index error:", error);
        setIsLoading(false);
      });
  }, []);

  let featuredBlog = blogs[0];

  return (
    <div className="blogs-container">

      <div className="blogs-header">
        <div className="blogs-header-title-wrapper">
          <h1 className="blogs-header-title">Welcome to my Blogs</h1>
          {isAuthorized && <Link to="/blogs/new" className="new-blog-btn">New Blog</Link>}
        </div>

        <div className="blogs-subtitle-wrapper">
          <h2 className="blogs-header-subtitle">Featured Blog_____________</h2>
          <Link to={`/blogs/${featuredBlog?.id}`} className="blogs-header-link">{featuredBlog?.title}</Link>
        </div>
      </div>

      <hr />

      <div className="blogs-content-wrapper">
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <div className="blogs-content">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        )}
        
        <div className="blogs-sidebar">
          <div className="blogs-sidebar-header">
            <h2 className="blogs-sidebar-title">Categories</h2>
            <ul>
              {categories.map((category) => <li><Link key={category.id} className="sidebar-category-link">{category.title}</Link></li>)}
            </ul>
          </div>
          <div className="blogs-sidebar-socials-wrapper">
            
            <a href="https://www.facebook.com/roman.lavery" target="_blank" rel='noreferrer' className="sidebar-social-link"><i className="bi bi-facebook"></i></a>
            <a href="https://github.com/Uthaeus" target="_blank" rel='noreferrer' className="sidebar-social-link"><i className="bi bi-github"></i></a>
            <a href="https://twitter.com/roman_lavery" target="_blank" rel='noreferrer' className="sidebar-social-link"><i className="bi bi-twitter"></i></a>
            <a href="https://www.linkedin.com/in/roman-lavery-software-dev/" target="_blank" rel='noreferrer' className="sidebar-social-link"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
