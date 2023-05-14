import { useState, useEffect } from "react";

import BlogItem from "../components/blog/blog-item";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("blogs index error:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;
