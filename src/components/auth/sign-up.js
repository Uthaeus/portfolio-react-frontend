import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../store/user-context";

function SignUp() {
    const { register, handleSubmit, error } = useForm();
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    function submitHandler(data) {
        console.log(data);
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        let dataToSend = {
            user: {
                email: data.email,
                username: data.username,
                password: data.password
            }
        };

        fetch('http://localhost:4000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                let token = response.headers.get('Authorization').split(' ')[1];
                localStorage.setItem('portfolio_token', token);
                return response.json();
            }
            throw response;
        })
        .then(data => {
            console.log(data.status.data);
            userCtx.login(data.status.data);
            navigate('/');
        })
        .catch(error => console.log('sign up error: ', error));
    }

    return (
        <div className="auth-wrapper">
            <h1 className="auth-title">Sign Up</h1>
            <form onSubmit={handleSubmit(submitHandler)} className="auth-form-wrapper">
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