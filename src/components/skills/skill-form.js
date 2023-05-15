import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SkillForm({ skill }) {
    const { register, handleSubmit, reset, error } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (skill) {
            reset(skill);
        }
    }, [skill, reset]);

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <div className="skill-form">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" {...register("name", { required: true })} />
                    {error?.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="percent_utilized">Percent Utilized</label>
                    <input type="number" className="form-control" {...register("percent_utilized", { required: true })} />
                    {error?.percent_utilized && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default SkillForm;