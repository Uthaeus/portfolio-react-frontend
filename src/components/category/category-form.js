import { useEffect } from "react";
import { useForm } from "react-hook-form";

function CategoryForm({ category }) {
    const { register, handleSubmit, reset, error } = useForm();

    useEffect(() => {
        if (category) {
            reset(category);
        }
    }, [category, reset]);

    function submitHandler(data) {
        console.log('data: ', data);
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