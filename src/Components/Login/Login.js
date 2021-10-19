import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <Header></Header>

            <div className='m-5'>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <div className="google-signin">
                        <Form.Group as={Row} className="mb-5">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Login</Button>
                                <br /> OR
                                <br />
                                <Button onClick={signInUsingGoogle}>Sign In with Google</Button>
                            </Col>
                        </Form.Group>
                    </div>
                </Form>
                <p>New here? <span><Link to='/signup'>Please create an account</Link></span></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;