import React from "react";

import './Fotos.css';

import imageOne from "./../../artFoto/artOne.jpg";
import imageTwo from "./../../artFoto/artTwo.jpg";
import imageTre from "./../../artFoto/artTree.jpg";
import imageFor from "./../../artFoto/artFiv.jpg";
import imageFiv from "./../../artFoto/artSix.jpg";


const fotos = props => {
    var one = imageOne;
    var two = imageTwo;
    var tre = imageTre;
    var fort = imageFor;
    var fiv = imageFiv;

    var index;


    let fotoClasses= 'foto-drawer';
    if(props.show) {
        fotoClasses= 'foto-drawer open';
    }if(props.img === 0 ) {
        index = one;
    }if(props.img === 1) {
        index = two;
    }if(props.img === 2) {
        index = tre;
    }if(props.img === 3) {
        index = fort;
    }if(props.img === 4) {
        index = fiv;
    }
    return(
        
            <nav className={fotoClasses} >
                <div className="fotogrid">
                    <img src={ index } alt="importImage"  ></ img>
                </div>
            </ nav>
        
    );
};
    

export default fotos;

