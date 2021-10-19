import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <div className="logo me-5 p-2">
                        <img src={logo} alt="" />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="">
                            <Link className='links' to="/home">Home</Link>
                            <Link className='links' to="/aboutus">About</Link>
                            <Link className='links' to="/services">Services</Link>
                            <Link className='links' to="/doctors">Doctors</Link>
                        </Nav>
                        <Nav className='ms-5'>
                            <Link className='links' to="signup">Regsiter</Link>
                            <span style={{ color: 'red' }}><small>{user.displayName}</small></span>
                            {
                                user.email ? <Link onClick={logOut} className='links' to='login'>LogOut</Link>
                                    :
                                    <Link className='links' to='login'>Log In</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; <h1>This is header</h1>