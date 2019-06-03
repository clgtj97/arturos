import React from "react";

import "./Alert.css";

const alert = props => {

    let fotoClasses= "foto-drawer";
    if(props.alert) {
        fotoClasses= "foto-drawer open";
    }
    return(
        
            <nav className={fotoClasses}  >
                <div className="fotogrid">
                    <h1>All-Set !</h1>
                    <p>
                        Your informaation has been sent to our data base and will be getting in contact with you shortly, Thanks for trusting in Confort Ambiental. 
                    </p>
                    <a href="/">CLICK HERE to GO back</ a>
                </div>
            </ nav>
        
    );
};

export default alert;