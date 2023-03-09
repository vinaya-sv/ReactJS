import React, { useEffect, useState } from 'react';
function Clock(){
    const [sessionLength,changeSessionLength]=useState(25);
    const [breakLength,changeBreakLength]=useState(5);
    const [minute,changeMinute]=useState(sessionLength);
    const [second,changeSecond]=useState(60);
    const [startOrStop,changeStartOrStop]=useState(false);
    const [sessionOrBreak,changeSessionOrBreak]=useState(true);
    var looper;
    const handleStart=()=>{
        looper=setInterval(function(){
            changeSecond((second)=>second-1)
        },1000);
    }
    const handleBreak=()=>{
        changeMinute(breakLength);
    }
    const handleSession=()=>{
        changeMinute(sessionLength);
    }
    useEffect(()=>{
        if(changeSessionOrBreak)
        changeMinute(sessionLength);
        else
        changeMinute(breakLength);
        if(second==0){
            changeSecond(60);
            changeMinute(minute-1);
        }
        if(minute==0){
            changeSessionOrBreak(false);
        }
    });

    const handleSessionDecrement=()=>{}
    return (
        <div id="wrapper">
            <div id="outer">
                <div id="break-label">
                    <button id="break-decrement" onClick={()=>changeBreakLength(breakLength-1)}>-</button>
                    <span id="break-length">{breakLength}</span>
                    <button id="break-increment" onClick={()=>changeBreakLength(breakLength+1)}>+</button>
                </div>
                <div id="session-label">
                    <button id="session-decrement" onClick={()=>{changeSessionLength(sessionLength-1)}}>-</button>
                    <span id="session-length">{sessionLength}</span>
                    <button id="session-increment" onClick={()=>changeSessionLength(sessionLength+1)}>+</button>
                </div>
                <div id="inner">
                    <p id="timer-label"></p>
                    <p id="time-left">{minute}:{second}</p>
                </div>
                <button id="start-stop" onClick={handleStart}>start-stop</button>
                <button id="reset">reset</button>
            </div>
        </div>
    )
}
export default Clock;