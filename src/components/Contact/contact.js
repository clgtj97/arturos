import React from "react";

import "./contact.css";
import imageOne from "./../../artFoto/artOne.jpg";

const contact = props => {
    return(   
    <div className="boxContact" >
        <form>      

            <h2> En que te podemos apoyar hoy ? </h2>

                
            <div className="boxContactIn"> 
            <div class="user"></div>
                <div className="inputBox">
                <label for="firstName">First Name</ label> <br></br>
                <input id="firstName" name="firstName" type="text" required=""></ input>
                </div>
                <div className="inputBox">
                <label for="lastName">Last Name</ label><br></br>
                <input id="lastName" name="lastName" type="text" required=""></ input>
                </div>    
                <div className="inputBox">
                <label for="email">Email</ label><br></br>
                <input id="email" name="email" type="text" required=""></ input>
                </div>
            </div>

            
                    


            <input type="submit" ></ input>
        
      </form>
    
    </ div>
    );
};

export default contact;