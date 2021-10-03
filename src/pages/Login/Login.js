import React from 'react';
import './Login.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import LottiePlayer from '../../components/LottiePlayer/LottiePlayer';
import {urls} from '../../resources/Urls';

function Login(){
    return(
        <div className="login-outer-wrapper">
            <div className="login-wrapper">
                <div className="login-left">
                    <LottiePlayer id="login-lottie" 
                    lottieUrl={urls.LoginLottie}/>
                </div>
                <div className='login-right'>
                    <div className="login-header">
                        <div className="name">User Login</div>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default Login;
