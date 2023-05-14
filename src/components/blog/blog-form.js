import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { UserContext } from "../store/user-context";

function BlogForm({ blog }) {
    const { register, handleSubmit, error, reset } = useForm();
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (blog) {
            reset(blog);
        }
    }, [blog, reset]);

    function buildForm(data) {
        const formData = new FormData();
        formData.append('blog[user_id]', userCtx.user.id);
        formData.append('blog[title]', data.title);
        formData.append('blog[body]', data.body);
        formData.append('blog[image]', data.image[0]);
        return formData;
    }

    function submitHandler(data) {
        console.log(data);

        const formData = buildForm(data);

        const url = blog ? `http://localhost:4000/blogs/${blog.id}` : "http://localhost:4000/blogs";
        const method = blog ? "PUT" : "POST";

        fetch(url, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('portfolio_token')
            },
            body: formData
        })
        .then(response => {
            if (response.ok) {
                navigate('/blogs');
                return response.json();
            }
            throw response;
        })
        .catch(error => console.log('blog submit error', error));
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