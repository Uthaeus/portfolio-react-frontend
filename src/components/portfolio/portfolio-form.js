import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function PortfolioForm({portfolio}) {
    const navigate = useNavigate();
    const { register, handleSubmit, error, reset } = useForm();

    useEffect(() => {
        if (portfolio) {
            reset(portfolio);
        }
    }, [portfolio, reset]);

    function buildForm(data) {
        let formData = new FormData();

        formData.append("portfolio[title]", data.title);
        formData.append("portfolio[subtitle]", data.subtitle);
        formData.append("portfolio[description]", data.description);
        formData.append("portfolio[link]", data.link);
        formData.append("portfolio[main_image]", data.main_image[0]);
        formData.append("portfolio[thumb_image]", data.thumb_image[0]);

        return formData;
    }

    function submitHandler(data) {
        console.log(data);
        let url = portfolio ? `http://localhost:4000/portfolios/${portfolio.id}` : "http://localhost:4000/portfolios";
        let method = portfolio ? "PUT" : "POST";
        let formData = buildForm(data);

        fetch(url, {
            method: method,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("portfolio_token")}`
            },
            body: formData
        })
        .then(res => {
            if (res.ok) {
                navigate("/portfolios");
                return res.json();
            }
            throw res;
        })
        .catch(error => console.log('portfolio error:', error));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" {...register("title", { required: true })} />
                    {error?.title && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="subtitle">Subtitle</label>
                    <input type="text" className="form-control" {...register("subtitle", { required: true })} />
                    {error?.subtitle && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" {...register("description", { required: true })} />
                    {error?.description && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="link">URL</label>
                    <input type="text" className="form-control" {...register("link", { required: true })} />
                    {error?.link && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="thumb_image">Thumb Image</label>
                    <input type="file" className="form-control" {...register("thumb_image", { required: true })} />
                    {error?.thumb_image && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="main_image">Main Image</label>
                    <input type="file" className="form-control" {...register("main_image", { required: true })} />
                    {error?.main_image && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary me-3">{portfolio ? 'Update' : 'Save'}</button>
            </form>
        </div>
    );
}

export default PortfolioForm;