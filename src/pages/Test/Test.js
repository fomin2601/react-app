import React, {useEffect, useState} from "react";

import Task from "../../components/Task";
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import {getTest, checkTest} from "../../actions/getTest";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Test = () => {
    let {id_test} = useParams();
    const [tasks, setTasks] = useState(null);
    const [answers, setAnswers] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTest(id_test)).then(res => {
            console.log(res.data);
            setTasks(res.data.problems);
            res.data.problems.split("|").map((id) => answers["answer_" + id] = '')
        })
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        await sleep(500);
        alert(JSON.stringify({answers}, null,2));
        dispatch(checkTest(answers)).then(res => {
            console.log('отправил ответы')
        })
    };

    const handleChangeAnswer = e => {
        answers[e.target.name]= e.target.value;
        setAnswers(answers => ({...answers, ...answers}));
    };



    return (
        <div className="Test">
            <h2>Тест {id_test}</h2>
            {tasks && tasks.split('|').map((id, index) =>
                <Task key={id}
                      number={index + 1}
                      id_not_useParams={id}
                      handleFormSubmit={handleSubmit}
                      handleChangeAnswer={handleChangeAnswer}
                />
            )}
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Проверить</button>
        </div>
    );
};

export default Test;
