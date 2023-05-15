import { useForm } from "react-hook-form";

function CommentForm() {
    const { register, handleSubmit, error } = useForm();

    function submitHandler(data) {
        console.log('submitHandler', data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <textarea className="form-control" {...register("comment", { required: true, min: '3' })} />
                    {error?.comment && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default CommentForm;