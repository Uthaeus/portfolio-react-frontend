import { useState, useEffect } from "react";

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
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Blogs;
