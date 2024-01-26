import React from "react"
// import PropTypes from "prop-types"
import { useState } from 'react'

export default function TextForm() {

    const [text, setText] = useState("Write your text here")
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const convertToUppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    return (
        <>
            <div className="textArea mb-3 m-2">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Area</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className="btn btn-outline-success my-2" onClick={convertToUppercase}>Convert To Uppercase</button>
                
            </div>
        </>
    )
}
