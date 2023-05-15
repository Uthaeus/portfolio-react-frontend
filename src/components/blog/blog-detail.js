import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { UserContext } from "../store/user-context";
import CommentForm from "../comments/comment-form";
import CommentItem from "../comments/comment-item";

function BlogDetail() {
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);
    const { id } = useParams();

    const isOwner = user?.id === blog?.user_id || user?.role === "site_admin";

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                setBlog(data);
                setComments(data.comments.reverse());
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("blog detail error:", error);
            });
    }, [id]);

    function addCommentHandler(comment) {
        setComments((prevComments) => [comment, ...prevComments]);
    }

    function commentDeleteHandler(commentId) {
        fetch(`http://localhost:4000/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('portfolio_token')}`
            }
        })
        .then(response => {
            if (response.ok) {
                let tempComments = comments.filter(comment => comment.id !== commentId);
                setComments(tempComments);
            }
        })
        .catch(error => console.log('comment delete error', error));
    }

    return (
        <div className="blog-detail-container">
            {isLoading && <p>Loading...</p>}
            { !isLoading && (
                <>
                    <div>
                        <img src={`http://localhost:4000${blog.image.url}`} alt={blog?.title} width='600px' height='400px' />
                    </div>
                    <div>
                        <h1>{blog?.title}</h1>
                        <p>{blog?.body}</p>
                    </div>

                    <div>
                        {user && <CommentForm blog_id={blog.id} user_id={user.id} addCommentHandler={addCommentHandler} />}
                        <div>
                            <h2>Comments</h2>
                            <hr />
                            {comments.map((comment) => <CommentItem key={comment.id} comment={comment} commentDeleteHandler={commentDeleteHandler} />)}
                        </div>
                    </div>

                    <div>
                        {isOwner && (
                            <>
                                <Link to={`/blogs/${id}/edit`} className="btn btn-success">Edit</Link>
                                <Link className="btn btn-danger">Delete</Link>
                            </>
                        )}
                        <Link to="/blogs" className="btn btn-primary">Back to Blogs</Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default BlogDetail;