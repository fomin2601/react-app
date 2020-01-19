import React from 'react'
import {render} from 'react-dom'
import App from "./components/App";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './rootReducer'
import setAuthorizationToken from "./util/setAuthorizationToken";
import {setCurrentUser} from "./actions/authActions";
import jwt from 'jsonwebtoken';


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);
if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}
setAuthorizationToken(localStorage.jwtToken);

render(
    <Provider store={store}>

            <App/>

    </Provider>, document.getElementById('app'));