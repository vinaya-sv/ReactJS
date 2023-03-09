import React,{useState} from 'react';
import "./CSS/calci.css";
import CreateButton from './calciButton';
function Calci(){
    var [formula,changeFormula]=useState("");
    var [answer,evaluateAnswer]=useState(0);
    const doEvaluation=()=>{
        var ans=eval(formula);
        evaluateAnswer=evaluateAnswer(ans);
        changeFormula(formula+"="+ans);
        //changeFormula(answer.toString());
    }
    const clear=()=>{
        changeFormula("");
        evaluateAnswer(0);
    }
    const doFormula=(event)=>{
        var x=event.target.innerText;
        if(formula.includes("="))
        changeFormula(formula.slice(formula.indexOf("=")+1,formula.length)+x);
        else
        changeFormula(formula+x);
        if((!isNaN(x) || x=="." && !formula.includes(".")) && answer!=0){
        evaluateAnswer(answer+x);
        }
        else if(x==".");
        else
        evaluateAnswer(x);
    }
    return(
        <div id="outer">
            <div id="formula">{formula}</div>
            <div id="display">{answer}</div>

            <CreateButton id="clear" bgColor="brown" width="47%" value="AC" method={clear}/>
            <CreateButton id="divide" value="/"  method={doFormula}/>
            <CreateButton id="multiply" value="*"  method={doFormula}/>
           
            <CreateButton id="seven" value="7"  method={doFormula}/>
            <CreateButton id="eight"  value="8"  method={doFormula}/>
            <CreateButton id="nine" value="9"  method={doFormula}/>
            <CreateButton id="subtract" value="-"  method={doFormula}/>
           
            <CreateButton id="four" value="4"  method={doFormula}/>
            <CreateButton id="five" value="5"  method={doFormula}/>
            <CreateButton id="six" value="6"  method={doFormula}/>
            <CreateButton id="add"  value="+"  method={doFormula}/>
        
            <CreateButton id="one" value="1"  method={doFormula}/>
            <CreateButton id="two" value="2"  method={doFormula}/>
            <CreateButton id="three" value="3"  method={doFormula}/>

            <CreateButton id="zero" width="47%" value="0"  method={doFormula}/>
            <CreateButton id="decimal" value="."  method={doFormula}/>
            <CreateButton id="equals" bgColor="rgb(31, 54, 74)" value="="  method={doEvaluation}/>

        </div>
    );
}
export default Calci;