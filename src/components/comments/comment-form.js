import { useForm } from "react-hook-form";

function CommentForm({ blog_id, user_id, addCommentHandler }) {
    const { register, handleSubmit, error, reset } = useForm();

    function submitHandler(data) {
        console.log('submitHandler', data);

        let dataToSend = {
            comment: {
                blog_id: blog_id,
                user_id: user_id,
                comment: data.comment
            }
        };

        fetch('http://localhost:4000/comments', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                reset();
                return response.json();
            }
        })
        .then(data => {
            console.log('comment submit data', data);
            addCommentHandler(data);
        })
        .catch(error => console.log('comment submit error', error));
    }

    return (
        <div className="comment-form-wrapper">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-2">
                    <label htmlFor="comment">Comment</label>
                    <textarea className="form-control" {...register("comment", { required: true, min: '3' })} />
                    {error?.comment && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="comment-form-btn">Submit</button>
            </form>
        </div>
    );
}

export default CommentForm;