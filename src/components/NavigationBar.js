import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/authActions';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

class NavigationBar extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const {isAuthenticated} = this.props.auth;

        const userLinks = (
            <Nav>
                <Nav.Link href="#" onClick={this.logout.bind(this)}>Выйти</Nav.Link>
            </Nav>


        );

        const guestLinks = (
            <Nav>
                <Nav.Link href="/signup">Зарегистрироваться</Nav.Link>
                <Nav.Link href="/login">Войти</Nav.Link>
            </Nav>
        );

        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">SUT SDO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    {isAuthenticated ? userLinks : guestLinks}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

NavigationBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logout})(NavigationBar);