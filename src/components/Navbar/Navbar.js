import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {RiMenu3Line} from 'react-icons/ri';


function Navbar(){
    const[dropdown, setDropdown] = React.useState(false);

    return(
        <React.Fragment>
        
        <div className="navbar-wrapper">
            <RiMenu3Line size={40} id="menu-icon" onClick={() => {setDropdown(!dropdown)}}/>
            <div className="navbar-options-wrapper">
                <ul className="navbar-options-list">
                    <Link to="/" style={{"textDecoration": "none"}}>
                    <li className="navbar-item">
                            Home
                    </li>
                    </Link>
                    <Link to="/feeds" style={{"textDecoration": "none"}}>
                    <li className="navbar-item">
                            Feeds
                    </li>
                    </Link>
                    <Link to="/login" style={{"textDecoration": "none"}}>
                    <li className="navbar-item actv">
                            Login
                    </li>
                    </Link>
                    <Link to="/register" style={{"textDecoration": "none"}}>
                    <li className="navbar-item actv">
                            Register
                    </li>
                    </Link>
                    
                </ul>

                {/* Mobile Navbar List */}
                <ul className="m-navbar-options-list" style={{display: dropdown === true ? 'block' : 'none'}}>
                    <Link to="/" style={{"textDecoration": "none"}}>
                    <li className="m-navbar-item">
                            Home
                    </li>
                    </Link>
                    <Link to="/feeds" style={{"textDecoration": "none"}}>
                    <li className="m-navbar-item">
                            Feeds
                    </li>
                    </Link>
                    <Link to="/login" style={{"textDecoration": "none"}}>
                    <li className="m-navbar-item">
                            Login
                    </li>
                    </Link>
                    <Link to="/register" style={{"textDecoration": "none"}}>
                    <li className="m-navbar-item">
                            Register
                    </li>
                    </Link>
                    
                </ul>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Navbar;