import React from 'react';
import NavigationBar from './NavigationBar'
import Greetings from "./Greetings";
import Main from "./Main";
import { Router, Switch, Route} from "react-router-dom";
import SignupPage from './signupPage/SignupPage'
import history from '../history'
import FlashMessagesList from './flash/FlashMessagesList'
import LoginPage from './login/LoginPage'
import NewEventPage from './events/NewEventPage'
import requireAuth from "../util/requireAuth";
import './bootstrap.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                    <Router history={history}>
                        <NavigationBar/>
                        <FlashMessagesList />
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path="/signup" component={SignupPage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/new-event" component={requireAuth(NewEventPage)}/>
                        </Switch>
                    </Router>
            </div>
        );
    }
}

export default App;