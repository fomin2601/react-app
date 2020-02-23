import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import {getProblem} from "../../actions/getProblem";
import classnames from "classnames";

import './CourseIcon.scss'


const CourseIcon = ({name_course, description, id, href, img}) => {

    /*const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProblem(id_task)).then(res => {
            setBody(res.data.body);
            setType_question(res.data.type_question);
            setAnswer_1(res.data.answer_1);
            setAnswer_2(res.data.answer_2);
            setAnswer_3(res.data.answer_3);
            setAnswer_4(res.data.answer_4);
        })
    }, []);
*/

    return (
        <div className={"CourseIcon"}>

            <div className="card mb-3">
                <a href={href}>
                    <img
                        src={img}/>
                </a>
                <div className="card-body">
                    <h5 className="card-title">{name_course}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>


    )
};

export default CourseIcon;