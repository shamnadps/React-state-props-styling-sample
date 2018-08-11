import React from 'react';
import './Input.css';

const Input = (props) => {

    const style = {
        boxShadow: "2rem green",
        padding: "2rem",
        marginBottom: "2rem",
        fontSize: "1rem",
        marginTop: "1rem",
        fontFamily: "Courier New, Courier, monospace"
    }
    return (
        <input style={style} type="text" value={props.value} onChange={props.change} />
    )
}

export default Input;