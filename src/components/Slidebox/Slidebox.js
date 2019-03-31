import React from "react";

import './Slidebox.css';
import imageUno from "./../../artFoto/artrealone.jpg";
import imageDos from "./../../artFoto/artrealtwo.jpg";
import imageTres from "./../../artFoto/artrealtre.jpg";
import imageCua from "./../../artFoto/artrealfor.jpg";

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
            <button onClick ={back}>Back</button>
              <button onClick ={next}>Next</button>
        </ div>
    )
};
    

export default slidebox;
