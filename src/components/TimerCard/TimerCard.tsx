import React, {FC, useEffect, useState} from 'react';

import './TimerCard.scss'

type TimerCard = {
    durationTimer: number,
    completeTasks: number,
    quantityTasks: number
}

const TimerCard: FC<TimerCard> = ({durationTimer, completeTasks, quantityTasks}) => {

    const [currentTime, setCurrentTime] = useState(0);
    const [timer, setTimer] = useState('00:00:00');
    const [backTimer, setBackTimer] = useState('00:00:00');
    const [sec, setSec] = useState('00');
    const [min, setMin] = useState('00');
    const [hour, setHour] = useState('00');
    let initialTime = 0;
    /*let seconds = 0;
    let minutes = 0;
    let hours = 0;*/




    function tick() {
        initialTime++;
        setCurrentTime(initialTime);

        let seconds = initialTime % 60;
        let minutes = parseInt(String(initialTime / 60));
        let hours = parseInt(String(initialTime / 3600));

        setTimer(viewTime(initialTime));
        setBackTimer(viewTime(durationTimer - initialTime));
    }


    function viewTime(t: number){
        let sec = String(t % 60);
        let min = String(parseInt(String(t / 60)));
        let hour = String(parseInt(String(t / 3600)));
        if (String(sec).length == 1) sec = '0' + sec;
        if (String(min).length == 1) min = '0' + min;
        if (String(hour).length == 1) hour = '0' + hour;

        return hour + ':' + min + ':' + sec;
    }


    useEffect(() => {
        setInterval(tick, 1000);
    }, []);



    return (
        <div className={"TimerCard"}>
            <div className={"Card"}>
                <div className={"TimerCard-Content"}>
                    <div className={"TimerClock-Time"}>
                        {backTimer}
                    </div>

                    <div className={"TimerClock-TestInfo"}>
                        <span>Выполнено заданий: {completeTasks} из {quantityTasks}</span>
                        <br/>
                        <span>Времени прошло: {timer}</span>
                    </div>

                </div>

            </div>
        </div>

    );


};

export default TimerCard;