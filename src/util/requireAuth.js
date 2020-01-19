import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {addFlashMessage} from "../actions/flashMessages";
import history from "../history";

export default function (ComposeComponent) {
    class Authenticate extends React.Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'Вам нужно авторизоваться'
                });
                history.push('/login')
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                history.push('/')
            }
        }

        render() {
            return (
                <ComposeComponent {...this.props}/>
            );
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        addFlashMessage: PropTypes.func.isRequired

    }

    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }

    
    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        };
    }

    return connect(mapStateToProps, {addFlashMessage})(Authenticate);
}
