import React from "react";
import classnames from "classnames";


const TestResultTable = ({resultTest, answers}) => {
    // console.log(resultTest);
    /*const resultTest = {1: false, 2: false, 3: true};*/
    /*const res = Object.keys(resultTest).map((key) => {
        return [resultTest[key]]
    });
    console.log(res)
    console.log(Object.keys(resultTest))*/
    console.log(resultTest, 'resultTest');
    console.log(answers, 'asnwers');
    console.log(resultTest[2], 'resultTest[2]');

    const rowTable = Object.keys(resultTest).map((key, index) =>
        <tr
            className={classnames({"table-success": (resultTest[key] === true)}, {"table-danger": (resultTest[key] === false)})}
            key={key}>
            <th scope="row"><a href={"#task_" + key}>{index + 1}</a></th>
            <td>{answers["answer_" + key]}</td>
        </tr>
    );

    const countTask = Object.keys(resultTest).length;
    let countTrue = 0;
    Object.keys(resultTest).map((key) => {

        if (resultTest[key] === true) {
            countTrue++;
        }
        });

    return (
        <div className={"col-md-6 offset-md-3"}>
            <h4>Результаты теста</h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Номер задания</th>
                    <th scope="col">Ваш ответ</th>
                </tr>
                </thead>
                <tbody>
                {rowTable}
                </tbody>
            </table>
            <h6>Вы набрали {countTrue} из {countTask} баллов</h6>
        </div>


    )
};

export default TestResultTable;