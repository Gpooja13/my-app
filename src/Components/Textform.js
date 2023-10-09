import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const upCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert(" Converted to uppercase","Success");
  }

  const loCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert(" Converted to lowercase","Success");
  }

  const sentCase = () => {
    let newtext = text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);
    setText(newtext);
    props.showAlert(" Converted to sentence-case","Success");
  }

  const clr = () => {
    setText("");
    props.showAlert(" Text cleared","Success");
  }

  const copy = () => {
    navigator.clipboard.writeText(copytext);
    props.showAlert(" Copied to clipboard","Success");
  }

  const removeSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert(" Extra spaces removed","Success");
  }

  const change = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="container">
      <h1 className="my-4">{props.heading}</h1>
      <div className="input-group container my-4">
        <textarea
          className="form-control"
          onChange={change}
          value={text}
          placeholder="Enter text here"
          aria-label="With textarea"
          rows="6"
          style={{backgroundColor:props.mode==="light"?"#dee2e6":"#6c757d", color:props.mode==="light"?"black":"white"}}
        ></textarea>
      </div>
      <div>
        <button disabled={text.length===0} type="button" onClick={upCase} className="btn btn-primary mx-2 my-1">
          Uppercase
        </button>
        <button disabled={text.length===0} type="button" onClick={loCase} className="btn btn-primary mx-2 my-1">
          Lowercase
        </button>
        <button disabled={text.length===0} type="button" onClick={sentCase} className="btn btn-primary mx-2 my-1">
          Sentence-case
        </button>
        <button disabled={text.length===0} type="button" onClick={removeSpaces} className="btn btn-primary mx-2 my-1">
          Remove Spaces
        </button>
        <button disabled={text.length===0} type="button" onClick={copy} className="btn btn-primary mx-2 my-1">
          Copy
        </button>
        <button disabled={text.length===0} type="button" onClick={clr} className="btn btn-primary mx-2 my-1">
          Clear
        </button>

        <div className="my-4">
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
          <p>{Math.round(0.008 * text.split(" ").length,2)} Minutes read</p>
        </div>

        <h3 className="my-4">Preview</h3>
        <div>{text.length>0?text:"Nothing to preview"}</div>
      </div>
    </div>
  );
}
