import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../store/user-context";

function SignIn() {
    const { register, handleSubmit, error } = useForm();
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    function submitHandler(data) {
        console.log(data);
        let dataToSend = {
            user: {
                email: data.email,
                password: data.password
            }
        };

        fetch('http://localhost:4000/users/sign_in', {
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
        .catch(error => console.log('sign in error: ', error));
    }

    return (
        <div className="auth-wrapper">
            <h1 className="auth-title">Sign In</h1>
            <form onSubmit={handleSubmit(submitHandler)} className="auth-form-wrapper">
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