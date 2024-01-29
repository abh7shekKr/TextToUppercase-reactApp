import React from "react"
// import PropTypes from "prop-types"
import { useState } from 'react'

export default function TextForm() {

    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    // const handleAltClick =() => {
    //     let newText = text;
    //     for(let i=0; i<text.length;i=i+2){

    //     }
    // }
    const [myBtn, myBtnText] = useState("Enable dark mode")
    const [myStyle, setMyStyle] =  useState({
        color: "black",
        backgroundColor: "white"
    })


    const toggleDarkMode = ()=>{
        if(myStyle.color==="black"){
            setMyStyle({
                color:"white",
                backgroundColor:"rgb(178,178,178)"
            })
            myBtnText("Enable light mode")
        }else{
            setMyStyle({
                color:"black",
                backgroundColor:"white"
            })
            myBtnText("Enable dark mode")
        }
        
    }

    return (
        <>
            <div className="textArea m-2 my-4 ">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fs-4">Text Area</label>
                <textarea className="form-control" style={myStyle} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
                <button className="btn btn-success my-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-success my-2 mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-success my-2" onClick={handleClearClick}>Clear Text</button>
                {/* <button className="btn btn-success my-2" onClick={handleAltClick}>Alternate Text</button> */}
                <button className="btn btn-success my-2 mx-2" onClick={toggleDarkMode} >{myBtn}</button>
            </div>

            <div className="container my-3">
                <h4>Your Text Summary</h4>
                <p>{text.split(" ").length} words & {text.length} characters</p>

                <h4>Text Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
