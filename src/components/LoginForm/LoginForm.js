import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

function LoginForm(){

    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');

    return(
        <form id="login-ms-form" autoComplete="off"
        method="POST"
        >
            <div className="f-tab">
                <div className="form-group">
                    <input type="email" className="form-control" 
                    placeholder="Email" 
                    onChange = {e => setEmail(e.target.value)}
                    value={email}
                    required
                     />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" 
                    placeholder="Password" 
                    onChange = {e => setPassword(e.target.value)}
                    value={password}
                    required />
                </div>
                
                <div className="form-group">
                    <button type="submit" className="next">
                        Submit
                    </button>
                </div>
                <div className="form-group">
                    <div className="signup-form-footer">
                        Don't have an account? 
                        <Link to="/register" id="loginform-register-link">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;