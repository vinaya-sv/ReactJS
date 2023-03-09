import React,{Component} from 'react';
import './CSS/Clock.css';
import { HiArrowNarrowUp,HiArrowNarrowDown } from 'react-icons/hi';

class Clock extends Component{
    state={
        breakLength:5,
        sessionLength:25,
        minute:25,
        second:0,
        sessionOrBreak:false,
        shouldPause:false,
        display:"Session",
        handleSession:()=>{
            if(this.state.sessionOrBreak){
                this.setState({minute:this.state.sessionLength});
                this.setState({display:"Session"});
            }
            else{
                this.setState({minute:this.state.breakLength});
                this.setState({display:"Break"});
            }
            this.setState({sessionOrBreak:!this.state.sessionOrBreak});
            }
    }

    shouldComponentUpdate(){
        return !this.state.shouldPause;
    }
    
    componentDidUpdate(){     
        if(this.state.minute==0 && this.state.second==0)
            this.state.handleSession();
    }
    render(){
        const handleStartStop=()=>{
            this.setState({shouldPause:!this.state.shouldPause});
            if(this.state.shouldPause){
            var looper=setInterval(()=>{
                this.setState({second:this.state.second-1});
                if(this.state.second==0){
                    this.setState({second:60});
                    this.setState({minute:this.state.minute-1});
                }
            },1000);
            }
        }
        const handleReset=()=>{
            this.setState({handleSessionOrBreak:false});
            this.setState({minute:this.state.sessionLength});
            this.setState({second:0});
        }
        return(
            <div id="wrapper">
            <p id="title">25+5 Clock</p>
            <div id="outer">
                <div id="break-label"><p id="subtitle">Break Length</p>
                <button id="break-decrement" onClick={()=>{
                        this.setState({breakLength:this.state.breakLength-1});
                        if(this.state.sessionOrBreak)
                        this.setState({minute:this.state.minute-1});
                    }} disabled={this.state.breakLength===0}>-</button>
                    <span id="break-length">{this.state.breakLength}</span>

                    <button id="break-increment" onClick={()=>{
                        this.setState({breakLength:this.state.breakLength+1});
                        if(this.state.sessionOrBreak)
                        this.setState({minute:this.state.minute+1});
                    }} disabled={this.state.breakLength===60}>+</button>
                </div>
                <div id="session-label"><p id="subtitle">Session Length</p>
                    <button id="session-decrement" onClick={()=>{
                        this.setState({sessionLength:this.state.sessionLength-1});
                        if(!this.state.sessionOrBreak)
                        this.setState({minute:this.state.minute-1});
                        }} disabled={this.state.sessionLength===0}>-</button>
                    <span id="session-length">{this.state.sessionLength}</span>
                    <button id="session-increment" onClick={()=>{
                        this.setState({sessionLength:this.state.sessionLength+1});
                        if(!this.state.sessionOrBreak)
                        this.setState({minute:this.state.minute+1});}} disabled={this.state.sessionLength===60}>+</button>
                </div>
                <div id="inner">
                    <p id="timer-label">{this.state.display}</p>
                    <p id="time-left">{this.state.minute}:{this.state.second}</p>
                </div>
                <button id="start-stop" onClick={handleStartStop}>start-stop</button>
                <button id="reset" onClick={()=>window.location.reload()}>reset</button>
            </div>
        </div>
        )
    }
}
export default Clock;