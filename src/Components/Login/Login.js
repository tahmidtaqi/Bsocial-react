import React, { useState } from 'react';
import './Login.css';
import login_background from '../../images/background/2.jpg'
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Login = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                            <p className="signup-paragraph mt-2">Already have an account?  <Button variant="primary" onClick={handleShow}>Signup</Button></p>
                        </div>
                        <div className="container login-page-lower-area">
                            <button className="semi-transparent-button">About Us</button>
                            <button className="semi-transparent-button">FAQs</button>
                            <button className="semi-transparent-button">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SIgn Up</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
    <Form.Group controlId="formGroupName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button type="submit" variant="primary" onClick={handleClose}>
   Sign Up
</Button>
</Form>
</Modal.Body>
{/*
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
    Close
</Button>
<Button variant="primary" onClick={handleClose}>
    Save Changes
</Button>
</Modal.Footer>
*/}
</Modal>
        </div>
    );
};

export default Login;