import React,{useState} from 'react';
function CreateButton(props){
    const [bg,changeBg]=useState(props.bgColor);
    const changeBgOnMouseOver=()=>{
        changeBg("Green");
    }
    const changeBgOnMouseOut=()=>{
        changeBg(props.bgColor);
    }
    return(
        <button id={props.id} 
        style={{
            backgroundColor:bg,
            color:"white",
            fontSize: 18,
            height:"14%",
            width:props.width,
            marginLeft:"1%",
            marginTop:"1.5%",
            display: "inline-block", 
            textAlign:"center"
        }}
        onClick={props.method}
        onMouseOver={changeBgOnMouseOver}
        onMouseLeave={changeBgOnMouseOut}>
            {props.value}</button>
    );
}
const defaultProps={
    width:"23%",
    bgColor:"#636363"
}
CreateButton.defaultProps=defaultProps;
export default CreateButton;