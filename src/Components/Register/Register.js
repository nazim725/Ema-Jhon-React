import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useauth';
import './Register.css'

const Register = () => {
    const {handleRegustration,handleEmailChange,handlePasswordChange,error}=useAuth()
    return (
        <div className="login">
            <div>
                <h2>Create Account</h2>

                <form onSubmit={handleRegustration}>
                <input onBlur={handleEmailChange} type="email" placeholder="Your Email"/>
                <br />
                <input onBlur={handlePasswordChange} type="password" placeholder="Your Password" />
                <br />
                <input className="login-button" type="submit" value="Submit" />
                <div>{error}</div>
                <br />
                
                </form>

                <small>Already have an account?</small> <br />
                <small>Please <Link  className="link" to="/login">Sign In</Link></small>

                <div>-------------or----------</div>
                <button className="login-button">Google Sign In</button>


            </div>
            
        </div>
    );
};

export default Register;