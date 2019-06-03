import React from "react";

import './Fotos.css';

import imageOne from "./../../artFoto/artOne.jpg";
import imageTwo from "./../../artFoto/artTwo.jpg";
import imageTre from "./../../artFoto/artTree.jpg";
import imageFor from "./../../artFoto/artFiv.jpg";
import imageFiv from "./../../artFoto/artSix.jpg";


const fotos = props => {

    var index;
    var resize;
    var imgNow = props.img;
    let fotoClasses= 'foto-drawer';
    
    switch (imgNow)
            {
               case 0: 
                index = imageOne;
                resize = "imgsize";
               break;
            
               case 1: index = imageTwo;
               break;
            
               case 2: index = imageTre;
               break;
            
               case 3: index = imageFor;
               break;
            
               case 4: index = imageFiv;
               break;
            
               default:  index = imageOne;
                         resize = "none";
            }
    if(props.show) {
        fotoClasses= 'foto-drawer open';
    }
    return(
        
            <nav className={fotoClasses} >
                <div className="fotogrid">
                    <img src={ index } alt="importImage" id= { resize } ></ img>
                </div>
            </ nav>
        
    );
};
    

export default fotos;

