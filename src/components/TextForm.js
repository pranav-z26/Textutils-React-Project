import React, { useState } from 'react';

function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLwClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const clear = () => {
        let newText = ''
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter your text')
    return (
        <>
            <div>
                <h1 className='text-center'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleLwClick}>Convert to Lowercase</button>
                    <button className='btn btn-danger mx-2' onClick={clear}>Clear</button>
                </div>
            </div>
            <div className='my-4 text-center mx-5'>
                <h3>Your text summary</h3>
                <p>No. of words = <b>{text.split(" ").length}</b> and Characters = <b>{text.length}</b></p>
                <p>Average time required to read = <b>{0.008 * text.split(" ").length}</b> mins</p>
                <hr></hr>
                <h5>Preview</h5>
                <p className='border bg-light text-success mx-5'>{text}</p>
            </div>
        </>
    )
}

export { TextForm };