import React, {useEffect, useState} from "react";

import Task from "../../components/Task";
import {useParams} from "react-router";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Test = () => {
    let {id_test} = useParams();
    const [test, setTest] = useState(null);
    const [task, setTask] = useState(null);
    const [answers, setAnswers] = useState({});

    /*useEffect(() => {
        setTask("Hi");
    }, [setTask]);*/



/*    handleChange(event) {
        this.setState({value: event.target.value});
    }*/

    const handleSubmit = async e => {
        e.preventDefault();
        await sleep(500);
        alert(JSON.stringify({answers}, null,2));
    };

    const handleChangeAnswer = e => {
        setAnswers(e.target.value);
    };



    return (
        <div className="Test">
            <h2>Тест {id_test}</h2>
            {/*{task && task.map((item, key) =>
                <Task data={item}
                      key={key}/>
            )}*/}
            <Task id_not_useParams={1} handleFormSubmit={handleSubmit} handleChangeAnswer={handleChangeAnswer}/>
            <Task id_not_useParams={1} handleFormSubmit={handleSubmit} handleChangeAnswer={handleChangeAnswer}/>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Отправить</button>
        </div>
    );
};

export default Test;
