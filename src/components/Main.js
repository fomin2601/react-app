import React from 'react'
import Greetings from "./Greetings";
import Problem from "./test/Problem";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Problem/>
            </div>

        );
    }
}

export default Main;