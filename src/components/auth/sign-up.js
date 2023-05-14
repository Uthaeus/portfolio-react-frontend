import { useForm } from "react-hook-form";

function SignUp() {
    const { register, handleSubmit, error } = useForm();

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" {...register('email', { required: true })} />
                    {error?.email && <span className="text-danger">Email is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="username">Username</label>
                    <input type='text' className="form-control" {...register('username', { required: true })} />
                    {error?.username && <span className="text-danger">Username is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type='password' className="form-control" {...register('password', { required: true })} />
                    {error?.password && <span className="text-danger">Password is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type='password' className="form-control" {...register('confirmPassword', { required: true })} />
                    {error?.confirmPassword && <span className="text-danger">Confirm Password is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;