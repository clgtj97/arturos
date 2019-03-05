import React from "react";

import "./FotoButton.css"

const fotoButton = props => (
    <button className="foto-button" onClick={props.click} >
        <div className="foto-button__line" />
        <div className="foto-button__line" />
        <div className="foto-button__line" />
    </ button>
);

export default fotoButton;