import React from 'react'
import LoginForm from './LoginForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class LoginPage extends React.Component {

    render() {
        return (

            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <LoginForm/>
                    </Col>
                </Row>
            </Container>


        );
    }
}




export default LoginPage;