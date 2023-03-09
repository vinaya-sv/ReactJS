import React from 'react';
import { useState } from 'react';
import { CgTwitter } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import {RiDoubleQuotesL} from "react-icons/ri";
import "./QuoteGenerator.css";
function QuoteGenerate(){
        const list=[
            {text:"To live is the rarest thing in the world. Most people exist, that is all.",author:"Oscar Wilde"},
            {text:"It is never too late to be what you might have been.",author:"George Eliot"},
            {text:"Pain is inevitable. Suffering is optional.",author:"Haruki Murakami"},
            {text:"Be kind, for everyone you meet is fighting a hard battle.",author:"Plato"},
            {text:"Let me live, love, and say it well in good sentences.",author:"Sylvia Plath"},
            {text:"Don't let your happiness depend on something you may lose.",author:"C.S. Lewis"},
            {text:"We are all broken, that's how the light gets in.",author:"Ernest Hemingway"},
            {text:"Life is tough my darling, but so are you.",author:"Stephanie Bennett Henry"},
            {text:"You cannot find peace by avoiding life",author:"Virginia Woolf"},
            {text:"The strongest principle of growth lies in the human choice",author:"George Eliot"},
            {text:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",author:"Aristotle"}
        ];
        const colors=["green","#f48b94","#507365","#6c5b7b","#355c7d","#f7a8a6","#60698a","#968489"];
        const [index,setIndex]=useState(0);
        const [colorIndex, setColorIndex]=useState(0);
        const generate=()=>{
            setIndex(Math.round(Math.random()*100)%list.length)
            setColorIndex(Math.round(Math.random()*100)%colors.length);
        }
        return(
            <div id="quote-box">
                
            <div id="box">
            <style>{'body{background-color:'+colors[colorIndex]+';transition: background 2s ease;}'}</style>
            <div id="textbox">
            <p id="text" style={{color:colors[colorIndex],transition: "color 2s ease"}}><RiDoubleQuotesL/>{list[index].text}</p>
            <p id="author" style={{color:colors[colorIndex],transition: "color 2s ease"}}>-{list[index].author}</p>
            </div>
            <div id="buttons">
            <a  id="tweet-quote" href='twitter.com/intent/tweet?text=${list[index].text}'><button style={{backgroundColor:colors[colorIndex],transition: "background 2s ease"}}><BsTwitter/></button></a>
            <button  style={{backgroundColor:colors[colorIndex],transition: "background 2s ease"}}><CgTwitter/></button>
            <button id="new-quote" style={{backgroundColor:colors[colorIndex],transition: "background 2s ease"}} onClick={generate}>New Quote</button>
            </div>
            </div>
            </div>
        );
}

export default QuoteGenerate;