import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function CategoryForm({ category }) {
    const { register, handleSubmit, reset, error } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (category) {
            reset(category);
        }
    }, [category, reset]);

    function submitHandler(data) {
        console.log('data: ', data);
        const dataToSend = {
            category: {
                title: data.title
            }
        };

        let url = 'http://localhost:4000/categories';
        let method = 'POST';

        fetch(url, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('portfolio_token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                navigate('/categories');
                return response.json();
            }
        })
        .catch(error => console.log('category form error: ', error));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group mb-4">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" {...register("title", { required: true })} />
                {error?.title && <span className="text-danger">This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default CategoryForm;