import React from 'react'
import SignupForm from './SignupForm'
import {connect} from 'react-redux'
import {userSignupRequest, isUserExists} from '../../actions/signupActions'
import {addFlashMessage} from '../../actions/flashMessages.js'
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SignupPage extends React.Component {
    router;

    render() {
        const {userSignupRequest, addFlashMessage, isUserExists} = this.props;
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <SignupForm
                            isUserExists={isUserExists}
                            userSignupRequest={userSignupRequest}
                            addFlashMessage={addFlashMessage}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}


export default connect(null, {userSignupRequest, addFlashMessage, isUserExists})(SignupPage);