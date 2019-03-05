import React from "react";
import image from './OK.png';

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
                  
                    <img src={image} alt="foto1" className="toolbar__img"  />
                
                <div className="toolbar_navigation-items">
                    <ul>
                        <li>
                            <a className="large__text" href="/">Confort Ambiental</ a>
                        </li >
                    </ ul>
                </ div>
            <div className="spacer" />
            
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Products</ a></ li>
                    <li><a href="/">Users</ a></ li>
                </ ul>
            </div>
        </  nav>    
    </ header>
);

export default toolbar;