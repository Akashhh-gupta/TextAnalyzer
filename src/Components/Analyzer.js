import React, { useState } from 'react'


function Analyzer() {
    const upperform = () => {
        let upperT = text.toUpperCase()
        setText(upperT)
    }
    const lowerform = () => {
        let lowerT = text.toLowerCase()
        setText(lowerT)
    }
    const revform = () => {
        let revT = text.split("").reverse().join("")
        setText(revT)
    }
    const trimform = () => {
        let trimT = text.replace(/\s+/g, ' ').trim()
        setText(trimT)
    }
    const sliceform = () => {
        let sliceT = text.slice(from, to)
        setResult(sliceT)
    }

    const speakform = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);

        if (pause) {
            window.speechSynthesis.resume();
        }
        setPause(false);
    }

    const pauseform = () => {
        const read = window.speechSynthesis
        setPause(true);
        read.pause();
    }

    const stopform = () => {
        window.speechSynthesis.cancel()
    };

    const inputTonchange = (event) => {
        const newText = event.target.value
        setText(newText)
    }

    const inputFchange = (event) => {
        const newFrom = parseInt(event.target.value)
        setFrom(newFrom)
    }

    const inputTochange = (event) => {
        const newTo = parseInt(event.target.value)
        setTo(newTo)
    }

    const [text, setText] = useState('How you doing Mate');

    const [from, setFrom] = useState(0)

    const [to, setTo] = useState(0)

    const [result, setResult] = useState("")

    const [pause, setPause] = useState(false)

    return (
        <>
            <div className="red-gradient">
                <h1 className="text-center">Text-Analyzer</h1>
                <div className="container">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="string1" onChange={inputTonchange} value={text}
                        ></textarea>
                        <label htmlFor="string1">String1</label>
                    </div>
                    <div className="form-floating mt-2">
                        <textarea className="form-control" placeholder="Leave a comment here" id="string2" value={text.length === 0 ? 0 : 0.006 * text.split(" ").length} disabled
                        ></textarea>
                        <label htmlFor="string2">Minutes to Read:</label>
                    </div>
                    <div className="d-flex align-items-center">
                        <input className="form-control mt-2 " type="search" placeholder="Search" aria-label="Search"
                            id="search_str" />
                        <button className="btn btn-outline-success mt-2 ms-2 align-self-center" type="submit"
                            id="search">Search</button>
                    </div>
                    <div className="row g-3 mt-1">
                        <div className="col">
                            <label className="fw-bold">Words</label>
                            <input type="text" className="form-control" id="words" value={text.length === 0 ? 0 : text.split(" ").length} disabled />
                        </div>
                        <div className="col">
                            <label className="fw-bold">Characters</label>
                            <input type="text" className="form-control" id="character" value={text.length} disabled />
                        </div>
                    </div>
                    <div className="row g-3 mt-1">
                        <div className="col">
                            <label>From:</label>
                            <input type="number" className="form-control" id="from" value={from} onChange={inputFchange} />
                        </div>
                        <div className="col">
                            <label>To:</label>
                            <input type="number" className="form-control" id="to" value={to} onChange={inputTochange} />
                        </div>
                    </div>
                    <div className="form-floating mt-2">
                        <textarea className="form-control" placeholder="Leave a comment here" id="result" value={result} disabled
                        ></textarea>
                        <label className="fw-bold" htmlFor="result">Result:</label>
                    </div>

                    <label className="mt-2">Function Buttons:</label>
                    <div className="d-flex">
                        <button type="button" className="btn m-2 ms-0 btn-primary" id="upper" onClick={upperform}>Upper</button>
                        <button type="button" className="btn m-2 btn-secondary" id="lower" onClick={lowerform}>Lower</button>
                        <button type="button" className="btn m-2 btn-success" id="reverse" onClick={revform}>Reverse</button>
                        <button type="button" className="btn m-2 btn-danger" id="trim" onClick={trimform}>Trim</button>
                        <button type="button" className="btn m-2 btn-warning" id="slice" onClick={sliceform}>Slice</button>
                        <button type="button" className="btn m-2 btn-info" id="speak" onClick={speakform}>{pause ? "Resume" : "Play"}</button>
                        <button type="button" className="btn m-2 btn-info" id="pause" onClick={pauseform}>Pause</button>
                        <button type="button" className="btn m-2 btn-info" id="stop" onClick={stopform}>Stop</button>
                    </div>
                </div>
            </div >
        </>
    )
}


export default Analyzer