import React from 'react';
import CourseIcon from "./CourseIcon";

const Main = () => {


    return (
        <div className="main">
            <h1><a href={"/test/1"}>Первый тест</a></h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <CourseIcon
                            name_course={"Исследование кодов Рида-Соломона"}
                            description={"Здесь написано небольшое описание этого курса. Можно просто помотреть как это будет выглядеть."}
                            img={"files/course_1.jpeg"}
                            href={"#"}

                        />
                    </div>
                    <div className="col">
                        <CourseIcon
                            name_course={"Исследование кодов Рида-Соломона"}
                            description={"Здесь написано небольшое описание этого курса. Можно просто помотреть как это будет выглядеть."}
                            img={"files/course_1.jpeg"}
                            href={"#"}

                        />
                    </div>
                    <div className="col">
                        <CourseIcon
                            name_course={"Исследование кодов Рида-Соломона"}
                            description={"Здесь написано небольшое описание этого курса. Можно просто помотреть как это будет выглядеть."}
                            img={"files/course_1.jpeg"}
                            href={"#"}

                        />
                    </div>
                </div>
            </div>

        </div>


    );

};

export default Main;