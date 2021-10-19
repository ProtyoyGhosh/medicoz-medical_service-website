import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();


    const handleSignup = e => {
        e.preventDefault();
        console.log(email, password)
        if (password.length < 6) {
            setError('**Password must be at least 6 charecter')
            return;
        }

        isLogin ? processLogin(email, password) : createUser(email, password);
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleSignUpButton = e => {
        setIsLogin(e.target.value);
    }

    return (
        <div>
            <Header></Header>
            <div className="signup m-5">
                <Form onSubmit={handleSignup}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <div className='m-3 text-danger'>
                        {error}
                    </div>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button onClick={handleSignUpButton} type="submit">Sign up</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <p>Already have an account? <span><Link to='/login'>Please Login</Link></span></p>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Signup;