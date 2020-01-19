import React from "react";
import {useParams} from "react-router";

function task() {
    let { id } = useParams();
    return <div>It's task with id = {id}</div>;

}

const Task = ({ field, value, label, error, type, onChange, checkUserExists }) => {
    return (task())
};

export default Task;