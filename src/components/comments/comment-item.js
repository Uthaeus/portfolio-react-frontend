import { useContext } from "react";

import { UserContext } from "../store/user-context";

function CommentItem({ comment, commentDeleteHandler }) {
    const { user } = useContext(UserContext);

    const isOwner = user?.id === comment.user_id || user?.role === "site_admin";
    
    return (
        <div className="card mb-3">
            <div className="card-body">
                <p className="card-text">{comment.comment}</p>
                
                <p className="card-text"><small className="text-muted">By {comment.user?.username}</small></p>
            </div>
            {isOwner && <button className="btn btn-danger" onClick={() => commentDeleteHandler(comment.id)}>Delete</button>}
        </div>
    );
}

export default CommentItem;