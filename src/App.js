import React, { Component } from "react";
import './App.css';

import FotoSlide from "./components/Fotos/Fotos"

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import imageOne from "./artFoto/artOne.jpg";
import imageTwo from "./artFoto/artTwo.jpg";
import imageTre from "./artFoto/artTree.jpg";
import imageFiv from "./artFoto/artFiv.jpg";
import imageSix from "./artFoto/artSix.jpg";




class App extends Component {

  state = {
    sideDrawerOpen: false,
    picturesOpen: false,
    imageIndex: 0
  };
 
  handleClickOne = () => {
    this.setState(prevState => {
      if(this.state.imageIndex >= 0) {this.pictureOpenClickHandler();}
        let nop = 0;
       return {imageIndex: nop }
    })
}

  handleClickTwo = () => {
    this.setState(prevState => {
      if(this.state.imageIndex >= 0) {this.pictureOpenClickHandler();}
        let nop = 1;
       return {imageIndex: nop }
    })
}

handleClickTree = () => {
  this.setState(prevState => {
    if(this.state.imageIndex >= 0) {this.pictureOpenClickHandler();}
      let nop = 2;
     return {imageIndex: nop }
  })
}

handleClickFour = () => {
  this.setState(prevState => {
    if(this.state.imageIndex >= 0) {this.pictureOpenClickHandler();}
      let nop = 3;
     return {imageIndex: nop }
  })
}

handleClickFive = () => {
  this.setState(prevState => {
    if(this.state.imageIndex >= 0) {this.pictureOpenClickHandler();}
      let nop = 4;
     return {imageIndex: nop }
  })
}

  pictureOpenClickHandler = () => {
    this.setState((prevState) => {
      return { picturesOpen: !prevState.picturesOpen }
    });
  };
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false, picturesOpen: false })
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen || this.state.picturesOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    } 
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        <FotoSlide img={this.state.imageIndex} show={this.state.picturesOpen} />
        
        {backdrop}
        <div className="toolbarSpace">
        <header id="showcase" className="grid">
          <div className="bg-image"></div>
          <div className="content-wrap">
            <h1>Bienvenidos a Confort Ambiental</h1>
            <p>Greatest properly off ham exercise all. Unsatiable invitation its possession nor off. All difficulty estimating unreserved increasing the solicitude. Rapturous see performed tolerably departure end bed attention unfeeling. On unpleasing principles alteration of. Be at performed preferred determine collected. Him nay acuteness discourse listening estimable our law. Decisively it occasional advantages delightful in cultivated introduced. Like law mean form are sang loud lady put. </p>
            <a
            id="1"  
            className="btn"
            onClick={this.handleClickOne}
            >Lee mas sobre nosotros</a>
              
                
          </div>
        </ header>
        </div>
        <main id="main" >
          {/* This is section A */}
          <section id="section-a" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">Que hacemos ?</h2>
              <div className="content-text">
                  <p>
                    Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne tedious.
                    Replying an marianne do it an entrance advanced. Two dare say play when hold. Required bringing
                    me material stanhill jointure is as he. Mutual indeed yet her living result matter him bed whence.
                    Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on
                    inhabit general concern. It earnest amongst he showing females so improve in picture. Mrs can hundred
                    its greater account. Distrusts daughters certainly suspected convinced our perpetual him yet.
                    Words did noise taken right state are since.
                  </p>
                  <a
            id="2"  
            className="btn"
            onClick={this.handleClickFour}
            >Lee mas sobre nosotros</a>
                </div>
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

            {/* This is section C 2 */}
          <section id="section-cdos" className="grid">
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
            <div>Confor Ambiental</div>
            <div>Projecto hecho por: <a href="https://ejs-port.herokuapp.com" rel="noopener noreferrer" target="_blank">Cesar Leyva</a></div>
          </footer>
      </div>
    );
  }
}

export default App;
