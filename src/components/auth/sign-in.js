import { useForm } from "react-hook-form";

function SignIn() {
    const { register, handleSubmit, error } = useForm();

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" {...register('email', { required: true })} />
                    {error?.email && <span className="text-danger">Email is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type='password' className="form-control" {...register('password', { required: true })} />
                    {error?.password && <span className="text-danger">Password is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;