import { useEffect } from "react";
import { useForm } from "react-hook-form";

function BlogForm({ blog }) {
    const { register, handleSubmit, error, reset } = useForm();

    useEffect(() => {
        if (blog) {
            reset(blog);
        }
    }, [blog, reset]);

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <div className="blog-form-wrapper">
            <h1 className="blog-form-title">Blog Form</h1>

            <form onSubmit={handleSubmit(submitHandler)} className="blog-form">
                <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input type='text' className="form-control" {...register('title', { required: true })} />
                    {error?.title && <span className="text-danger">Title is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="body">Body</label>
                    <textarea className="form-control" {...register('body', { required: true })} />
                    {error?.body && <span className="text-danger">Body is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="image">Image</label>
                    <input type='file' className="form-control" {...register('image', { required: true })} />
                    {error?.image && <span className="text-danger">Image is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default BlogForm;