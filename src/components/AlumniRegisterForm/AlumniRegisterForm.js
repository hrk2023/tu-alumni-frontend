import React from 'react';
import './AlumniRegisterForm.css';
import { Link } from 'react-router-dom';

function RegisterForm(){

    const[uname, setUname] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[batch, setBatch] = React.useState('');
    const[company, setCompany] = React.useState('');
    const[department, setDepartment] = React.useState('');
    const[linkedin, setLinkedin] = React.useState('');

    const[activeTab, setActiveTab] = React.useState(0);

    return(
        <form id="register-ms-form" autoComplete="off"
        method="POST"
        >
            <div className={activeTab === 0 ? "f-tab" : "f-tab hidden"}>
                <div className="form-group">
                    <input type="text" className="form-control" 
                    placeholder="Name" 
                    onChange = {e => setUname(e.target.value)}
                    value={uname}
                    required />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" 
                    placeholder="Email" 
                    onChange = {e => setEmail(e.target.value)}
                    value={email}
                    required
                     />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" 
                    placeholder="Current Company" 
                    onChange = {e => setCompany(e.target.value)}
                    value={company}
                    required />
                </div>
                <div className="form-group">
                    <button className="next" onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(1);
                        }
                    }>
                        Next
                    </button>
                </div>
                <div className="form-group">
                    <div className="signup-form-footer">
                        Already have an account? 
                        <Link to="/login" id="signupform-login-link">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            <div className={activeTab === 1 ? "f-tab" : "f-tab hidden"}>
                <div className="form-group">
                    <select className="form-select"
                    onChange = {e => setBatch(e.target.value)} required
                    value={batch}>
                        <option defaultValue>TU Batch</option>
                        <option value="Domain 1">Domain 1</option>
                        <option value="Domain 2">Domain 2</option>
                        <option value="Domain 3">Domain 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" 
                    placeholder="TU Department" 
                    onChange = {e => setDepartment(e.target.value)}
                    value={department}
                    required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" 
                    placeholder="Linkedin" 
                    onChange = {e => setLinkedin(e.target.value)}
                    value={linkedin}
                    required />
                </div>
                <div className="form-group ms-form-btn-grp">
                    <button className="previous" onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(0)
                        }
                    }>
                        Previous
                    </button>
                    <button type="submit" className="next">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;