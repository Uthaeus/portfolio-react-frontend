import { useContext } from "react";

import { UserContext } from "../store/user-context";

function CommentItem({ comment, commentDeleteHandler }) {
    const { user } = useContext(UserContext);

    const isOwner = user?.id === comment.user_id || user?.role === "site_admin";
    
    return (
        <div className="comment-item-wrapper">
            <div className="comment-item-actions">
                {isOwner && <button className="btn btn-danger" onClick={() => commentDeleteHandler(comment.id)}>X</button>}
            </div>
            <div className="card mb-1">
                <div className="card-body">
                    <p className="card-text">{comment.comment}</p>
                    
                    <p className="card-text text-end"><small className="text-muted">By {comment.user?.username}</small></p>
                </div>
                
            </div>
        </div>
    );
}

export default CommentItem;