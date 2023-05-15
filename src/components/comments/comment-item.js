
function CommentItem({ comment }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <p className="card-text">{comment.comment}</p>
                <p className="card-text"><small className="text-muted">By {comment.user?.username}</small></p>
            </div>
        </div>
    );
}

export default CommentItem;