import React, {useState} from 'react'

export default function PlayerTimer() {

    // thanks to https://javascript.info/settimeout-setinterval
    function countDown(from, to){
        let current = from - 1
        
        let timerId = setInterval(function() {
            console.log(current)
            setDisplayTime(current)
            if  (current === to) {
                clearInterval(timerId)
                setDisplayTime("Time's Up!")
            }
            current--
        },1000)
    }

    const InitialDisplayTime = 20
    
    const [displayTime, setDisplayTime] = useState(InitialDisplayTime)
    function handleTimer(e){
        countDown(displayTime, 0)
    }

    return (
        <div>
            <button value="start-timer"onClick={handleTimer} >Start Timer</button><br/>
            {displayTime}
        </div>
    )
}
