import React from "react";

import './Slidebox.css';
import imageUno from "./../../artFoto/artrealone.jpg";
import imageDos from "./../../artFoto/artrealtwo.jpg";
import imageTres from "./../../artFoto/artrealtre.jpg";
import imageCua from "./../../artFoto/artrealfor.jpg";
import arrowblue from "./../../artFoto/arrow.png";
import arrowred from "./../../artFoto/redarrow.png";

const slidebox = props => {
    let fotoClasses = 'foto-drawer';

    var imageArray = [imageUno ,imageDos, imageTres, imageCua];
    var imageIndex = props.dig;
    var next = props.next;
    var back = props.back;
   
    var index = imageArray[imageIndex];

    if(props.show) {
        fotoClasses= 'foto-drawer open';
    }
    return(
        <div className="red">
            <img src={ index } alt="importImage" id="mainImage" ></ img>
        <div className="section-d" className="grid" >
        
                <div className="box">
                    <div onClick ={ next } id="margin">
                        <img src={ arrowred } alt="arrowred" id="imgar"></ img>
                    </div>
                </div>
                <div className="box">
                    <div onClick ={ back } id="margin" >
                        <img src={ arrowblue } alt="arrowblue" id="imgar"></ img>
                    </div>
                </div>
         </ div>
        </ div>
    )
};
    

export default slidebox;
