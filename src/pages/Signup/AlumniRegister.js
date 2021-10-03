import React from 'react';
import './AlumniRegister.css';
import AlumniRegisterForm from '../../components/AlumniRegisterForm/AlumniRegisterForm';
import LottiePlayer from '../../components/LottiePlayer/LottiePlayer';
import {urls} from '../../resources/Urls';

function AlumniRegister(){
    return(
        <div className="registerpage-wrapper">
            <div className="registercard-wrapper">
                <div className="registercard-left">
                    <LottiePlayer id="register-lottie" 
                    lottieUrl={urls.alumniRegisterLottie}/>
                </div>
                <div className='registercard-right'>
                    <div className="registercard-header">
                        <div className="name">Alumni Signup</div>
                    </div>
                    <AlumniRegisterForm />
                </div>
            </div>
        </div>
    );
}

export default AlumniRegister;
