import React from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getProblem} from "../../actions/getProblem";
import history from "../../history";

class Problem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '1',
            body: '',
            answer_1: '',
            answer_2: '',
            answer_3: '',
            answer_4: '',
            selectedOption: ''
        };
        this.props.getProblem(this.state.id).then(res => {
            this.setState(res.data);
            console.log(res);
            }
        )
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        console.log("You have submitted:", this.state.selectedOption);
    };

    render() {
        const {id, body, answer_1, answer_2, answer_3, answer_4} = this.state;
        return (
            <div className="jumbotron">
                <h1>Вопрос {id}.</h1>
                <p>{body}</p>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <form onSubmit={this.handleFormSubmit}>
                                <div className="form-check">
                                    <label>
                                        <input
                                            type="radio"
                                            name="react-tips"
                                            value="option1"
                                            checked={this.state.selectedOption === "option1"}
                                            onChange={this.handleOptionChange}
                                            className="form-check-input"
                                        />
                                        {answer_1}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input
                                            type="radio"
                                            name="react-tips"
                                            value="option2"
                                            checked={this.state.selectedOption === "option2"}
                                            onChange={this.handleOptionChange}
                                            className="form-check-input"
                                        />
                                        {answer_2}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input
                                            type="radio"
                                            name="react-tips"
                                            value="option3"
                                            checked={this.state.selectedOption === "option3"}
                                            onChange={this.handleOptionChange}
                                            className="form-check-input"
                                        />
                                        {answer_3}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input
                                            type="radio"
                                            name="react-tips"
                                            value="option4"
                                            checked={this.state.selectedOption === "option4"}
                                            onChange={this.handleOptionChange}
                                            className="form-check-input"
                                        />
                                        {answer_4}
                                    </label>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary mt-2" type="submit">
                                        Ответить
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Problem.propTypes = {
    getProblem: PropTypes.func.isRequired
};

export default connect(null, {getProblem})(Problem);