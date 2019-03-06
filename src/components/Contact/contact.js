import React from "react";

import "./contact.css";

const contact = props => {
    return(
    <div className="boxContact" >
        <form>      

            <h2> En que te podemos apoyar hoy ? </h2>
            
            <div class="inputBox">
            <input id="firstName" name="firstName" type="text" required=""></ input>
            <label for="firstName">First Name</ label>
            </div>
            <div class="inputBox">
            <input id="lastName" name="lastName" type="text" required=""></ input>
            <label for="lastName">Last Name</ label>
            </div>    
            <div class="inputBox">
            <input id="email" name="email" type="text" required=""></ input>
            <label for="email">Email</ label>
            </div>
            
            <input type="submit" ></ input>
        
      </form>
    
    </ div>
    );
};

export default contact;