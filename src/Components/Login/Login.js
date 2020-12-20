import React from 'react';
import './Login.css';
import login_background from '../../images/background/2.jpg'
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div>
            <div className="container-fluid login-page">
                <Header></Header>
                <div className="container login-area">
                    <div className="container mt-5">
                        <h2>Welcome to Bsocial</h2>
                        <h5>Connecting people</h5>
                        <div className="container submit-area">
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="E-Mail" required></input>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password" required></input>
                                </div>
                                <br></br>
                                <button className="login-button"> Log into your account</button>
                            </form>
                            <p className="signup-paragraph mt-2">Already have an account? <a href="">Signup</a></p>
                        </div>
                        <div className="container login-page-lower-area">
                            <button className="semi-transparent-button">About Us</button>
                            <button className="semi-transparent-button">FAQs</button>
                            <button className="semi-transparent-button">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;