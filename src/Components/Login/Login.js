import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom'; 
import useAuth from '../../hooks/useauth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {signInUsingGoogle,error}=useAuth();
    const history=useHistory()
    const location=useLocation()
    const redirect_uri=location.state?.from || '/s';
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result=>{
            console.log(result.user)
            history.push(redirect_uri)
        })
    }

 

    return (
        <div className="login">
          
            <div>
                <h2> Sign-In</h2>
                <br />
               <form> 
               <input type="email"  placeholder="Your Email"/>
                <br />
                <input type="password" placeholder="Your Password" />
                <br />

                <input type="submit" className="login-button" value="Login"/>
               </form>
               <div>{error}</div>
            
          
          
             
             

                <small> New to Ema-Jhon? </small> <br />
               <small> <Link className="link" to="/register">Create Your Ema-jhon Account</Link></small>

                <div>-------------or-----------</div>
                <button className="login-button" onClick={handleGoogleLogin}>Google Sign In</button>
                
               
            </div>
            
        </div>
    );
};

export default Login;