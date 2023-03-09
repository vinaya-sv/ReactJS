import React,{useState} from "react";
import './CSS/previewer.css';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { marked } from "marked";
import parse from 'html-react-parser';

function Previewer(){
const str=`\'
# freecodecamp Solutions:
## Build a markdown previewer
[Learn more about the freecodecamp.org project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine).
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`
\`\`\`
function exampleOf() {
  return multiLineCodeBlock;
}
\`\`\`
- This
- is
- an
- example
- of
- list
- items
> This is an example of block quote
![freecodecamp](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)
**This is an example of Bolded Text**`;

    const [markDown,changeMarkDown]=useState(parse(marked(str)));
    const handleChange=(event)=>{
        const {value}=event.target;
        changeMarkDown(parse(marked(value)));
    
    }
    return(
       <div>
        <style>{'body{background-color:#bcd8d8;}'}</style>
        <div id="outer1">
            <div id="heading">Editor</div>
            <label>
            <textarea id="editor" onChange={handleChange} autofocus>
                {str}
            </textarea>
            </label>
                
        </div>

        <div id="outer2">
            <div id="heading">Preview</div>
            <br/>
            <div id="preview" autofocus>{markDown}</div>
            <br/>
                
        </div>

        
       </div> 
    )
}

export default Previewer;