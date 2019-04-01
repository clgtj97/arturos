import React, { Component } from "react";
import './App.css';
import axios from 'axios';

import FotoSlide from "./components/Fotos/Fotos";
import Contact from "./components/Contact/contact";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Slidebox from "./components/Slidebox/Slidebox";
import imageOne from "./artFoto/artOne.jpg";
import imageTwo from "./artFoto/artTwo.jpg";
import imageTre from "./artFoto/artTree.jpg";
import imageFiv from "./artFoto/artFiv.jpg";
import imageSix from "./artFoto/artSix.jpg";
import imagerealOn from "./artFoto/artrealone.jpg";




class App extends Component {

  state = {
    sideDrawerOpen: false,
    picturesOpen: false,
    imageIndex: 0,
    contactOpen: false,
    slideIndex: 0,
    email: "",
    fname: "",
    lname: ""
  }
  

  incrementCount = () =>{
    if(this.state.slideIndex <= 2){
    this.setState({ slideIndex: this.state.slideIndex + 1 });
  }else{
    var zero = 0;
    this.setState({ slideIndex: zero });
  }
}

  decrementCount = () =>{
    if(this.state.slideIndex >= 1){
    this.setState({ slideIndex: this.state.slideIndex - 1 });
  }else{
    var zero = 3;
    this.setState({ slideIndex: zero });
  }
}

  handleClickOne = () => {
    this.setState(prevState => {
      if(this.state.imageIndex >= 0) {this.pictureOpenClickHandler();}
        let nop = 0;
       return {imageIndex: nop }
    })
};

  handleClickTwo = () => {
    this.setState(prevState => {
      if(this.state.imageIndex >= 0) {this.pictureOpenClickHandler();}
        let nop = 1;
       return {imageIndex: nop }
    })
};

handleClickTree = () => {
  this.setState(prevState => {
    if(this.state.imageIndex >= 0) {this.pictureOpenClickHandler();}
      let nop = 2;
     return {imageIndex: nop }
  })
};

handleClickFour = () => {
  this.setState(prevState => {
    if(this.state.imageIndex >= 0) {this.pictureOpenClickHandler();}
      let nop = 3;
     return {imageIndex: nop }
  })
};

handleClickFive = () => {
  this.setState(prevState => {
    if(this.state.imageIndex >= 0) {this.pictureOpenClickHandler();}
      let nop = 4;
     return {imageIndex: nop }
  })
};

  contactOpenClickHandler = () => {
    this.setState((prevState) => {
      return { contactOpen: !prevState.contactOpen }
    })
  };

  pictureOpenClickHandler = () => {
    this.setState((prevState) => {
      return { picturesOpen: !prevState.picturesOpen }
    })
  };
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false, picturesOpen: false })
  };
  SwapDivsWithClick = (div1, div2) => {
    let d1 = document.getElementById(div1);
    let d2 = document.getElementById(div2);
    if (d2.style.socl.display == "none") {
        d1.style.display = "none";
        d2.style.display = "block";
    }
    else {
        d1.style.display = "block";
        d2.style.display = "none";
    }
}
    onChange = (e) => {
      /*
        Because we named the inputs to match their
        corresponding values in state, it's
        super easy to update the state
      */
      this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
      // get our form data out of state
      const { fname, lname, email } = this.state;
      
      axios({ method: 'POST',
      url: 'https://us20.api.mailchimp.com/3.0/lists/f7feaaa9f3/members',
      headers: 
       { 'Postman-Token': 'd7a5f2ea-feb0-4ef4-847f-b33fb941b65a',
         'cache-control': 'no-cache',
         Authorization: 'f650a6a7a42f6c5c67a528273940dd56,Bearer f650a6a7a42f6c5c67a528273940dd56-us20',
         'Content-Type': 'application/json' },
      body: 
       { email_address: 'oyyes@gmail.com',
         status: 'subscribed',
         merge_fields: { FNAME: 'one', LNAME: 'BOSS' } },
      json: true });
      

    }

    api = () => { axios({ method: 'POST',
    url: 'https://us20.api.mailchimp.com/3.0/lists/f7feaaa9f3/members',
    headers: 
     { 'Postman-Token': 'd7a5f2ea-feb0-4ef4-847f-b33fb941b65a',
       'cache-control': 'no-cache',
       Authorization: 'f650a6a7a42f6c5c67a528273940dd56,Bearer f650a6a7a42f6c5c67a528273940dd56-us20',
       'Content-Type': 'application/json' },
    body: 
     { email_address: 'Ce@gmail.com',
       status: 'subscribed',
       merge_fields: { FNAME: 'test', LNAME: 'win' } },
    json: true })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
  }
  
  render() {
    let backdrop;
    let contactBoard;
    let nocl;
    let sfcl = {
      textAlign: "center",
      position: "relative",
      fontWeight: "bold",
      fontStyle: "italic"
    };
    let socl = {
      display: "none",
      textAlign:"center",
      boxSizing: "border-box"
    };


    const { fname, lname, email } = this.state;

    if (this.state.sideDrawerOpen || this.state.picturesOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }if (this.state.contactOpen) {
      nocl = sfcl;
    }else{
      nocl = socl;
    }
    return (
      <div >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        <FotoSlide img={this.state.imageIndex} show={this.state.picturesOpen} />
        
        {backdrop}
        
        <div className="toolbarSpace">
        <header id="showcase" className="grid">
          <div className="bg-image"></div>
          <div className="content-wrap" id="backimg">
            <h1>Bienvenidos a Confort Ambiental</h1>
            <p>
              Contamos con 27 años de experiencia en la industria, permitiendo nos 
              ofrecer servicios con calidad, puede tener la confianza que
              tenemos la capacidad para desarrollar cualquier proyecto y
              seleccionar los productos en su beneficio.
             </p>
            <button
            id="1"  
            className="btn"
            onClick={this.handleClickOne}
            >Lee mas sobre nosotros</button>
              
                
          </div>
        </ header>
        </div>
        <main id="main" >
          {/* This is section A */}

            <section id="section-a" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">Somos</h2>
              <p>
              Una compañía dedicada a los servicios de instalación y venta de equipos de aire acondicionado, refrigeración, 
              extracción, calefacción, aislamientos y filtración. Nuestros servicios incluyen control de temperatura, 
              calidad del aire y control de humedad con equipos ahorradores energía. Contamos con 27 años de experiencia 
              en la industria lo cual nos permite ofrecer servicio con calidad, usted puede tener la confianza que 
              tenemos la capacidad para desarrollar cualquier proyecto y seleccionar los productos en su beneficio. 
              </p>
            </div>
          </section>

          {/* This is section B */}
          <section id="section-b" className="grid">
            <ul>
              {/* Card one */}
              <li>
                <div className="card">
                  <a onClick={this.handleClickFive} >
                    <img src={imageSix} alt="imagen #1"></img>
                  </ a>
                  <div className="card-content">
                    <h3 className="card-title">Tuberia de exterior</h3>
                    <p>
                      Far quitting dwelling graceful the likewise received building.
                      An fact so to that show am shed sold cold. Unaffected remarkably
                      get yet introduced excellence terminated led. Result either design
                      saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve.
                      Own judgment directly few trifling. Elderly as pursuit at
                      regular do parlors. Rank what has into fond she.
                        </p>
                  </div>
                </div>
              </li>
              {/* Card two */}
              <li>
                <div className="card">
                  <a onClick={this.handleClickTwo} >
                    <img src={imageTwo} alt="imagen #2"></img>
                  </a>
                  <div className="card-content">
                    <h3 className="card-title">Tuberia Interna</h3>
                    <p>
                      Far quitting dwelling graceful the likewise received building.
                      An fact so to that show am shed sold cold. Unaffected remarkably
                      get yet introduced excellence terminated led. Result either design
                      saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve.
                      Own judgment directly few trifling. Elderly as pursuit at
                      regular do parlors. Rank what has into fond she.
                        </p>
                  </div>
                </div>
              </li>
              {/* Card three */}
              <li>
                <div className="card">
                  <a onClick={this.handleClickTree} >
                    <img src={imageTre} alt="imagen #3"></img>
                  </a>
                  <div className="card-content">
                    <h3 className="card-title">Manufactura</h3>
                    <p>
                      Far quitting dwelling graceful the likewise received building.
                      An fact so to that show am shed sold cold. Unaffected remarkably
                      get yet introduced excellence terminated led. Result either design
                      saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve.
                      Own judgment directly few trifling. Elderly as pursuit at
                      regular do parlors. Rank what has into fond she.
                        </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

      
            {/* This is section C 1 */}
          <section id="section-c" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">Nuestros Productos</h2>
              <p>
                Satisfied conveying an dependent contented he gentleman agreeable do be.
                Warrant private blushes removed an in equally totally if. Delivered dejection
                necessary objection do mr prevailed. Mr feeling do chiefly cordial in do. Water
                timed folly right aware if oh truth. Imprudence attachment him his for sympathize.
                Large above be to means. Dashwood do provided stronger is. But discretion frequently
                sir the she instrument unaffected admiration everything.
              </p>
            </div>
          </section> 
    
          {/* image slide */}
          <section id="section-ca" className="grid">
            <div className="content-wrap">
              <Slidebox dig={this.state.slideIndex} next={this.incrementCount} back={this.decrementCount} >
              </ Slidebox>

            </div>
          </section> 

          
            {/* This is section C 2 */}
          <section id="section-cdos" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">Nuestros</h2>
              <p>
                Satisfied conveying an dependent contented he gentleman agreeable do be.
                Warrant private blushes removed an in equally totally if. Delivered dejection
                necessary objection do mr prevailed.
              </p>
            </div>
          </section>

          {/* This is section C 3 */}

          {/*
          <section id="section-ctres" className="grid">
            <div className="content-wrap" id="contactform">
            <a
            id="1"  
            className="btn"
            onClick={this.contactOpenClickHandler}
            >Contactanos</a>
            
            
              {contactBoard}
           
            </div>
          </section>
          */}

           <section id="section-ctres" className="grid">
            <div className="content-wrap" id="contactform">

                <a
                id="1"  
                className="btn"
                onClick={this.contactOpenClickHandler}
                >Contactanos</a>

                
              

            </div>

          </section>
          <div id="swapper-first" style = {nocl} >

          <section id="section-ctres" className="grid">
            <div className="content-wrap" id="contactform">

                

                <form  >
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={this.onChange}
                  />
                  <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={this.onChange}
                  />
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />

                  <input 
                    type="submit"
                    onSubmit={this.api} 
                  />
                </form>
                
              

            </div>
          </section>
       


              </div>

          {/* This is section D */}
          <section id="section-d" className="grid">
            <div className="box">
              <h2 className="content-title">Sobre nosotros</h2>
              <p>Una empresabasada en Tijuana, dedicada á
                Cuartos frios, Calefacción, Equipos de
                aire acondicionado, Ductos en general,
                  Ventilacion y estraccion</p>
              <p>
                confortambiental@live.com.mx
                </p>
            </div>
            <div className="box">
              <h2 className="content-title">Contactanos</h2>
              <p>
                 UArrival entered an if drawing request.
                 How daughters not promotion few knowledge
                 contented. Yet winter law behind number stairs
                 garret excuse. Minuter we natural conduct gravity
                 if pointed oh no. Am immediate unwilling of
                 attempted admitting disposing it. Handsome
                 opinions on am at it ladyship.
              </p>
            </div>
          </section>
        </ main>

        {/* Footer */}
          <footer id="main-footer" className="grid">
            <div>Confort Ambiental</div>
            <div>Projecto hecho por: <a href="https://ejs-port.herokuapp.com" rel="noopener noreferrer" target="_blank">Cesar Leyva</a></div>
          </footer>
      </div>
    );
  }
}

export default App;
