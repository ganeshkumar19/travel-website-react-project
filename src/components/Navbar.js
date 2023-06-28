import "./NavbarStyles.css"
import React, { Component } from 'react'
import { FaBars } from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
import {Link} from 'react-router-dom'
import MenuItems from "./MenuItems";


class Navbar extends Component {
  state = {clicked: false};

  handleClick = ()=> {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="navbaritems">
        <h1 className="navbar-logo">
        Tourista
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
         <i>{this.state.clicked ? <FaTimes/> : <FaBars/>}</i>
         
        </div>

        <ul className= {this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item,index)=> {
            return(
              <li key={index}>
              <Link className= {item.cName} to= {item.url}>
               <span> {item.icon}</span>
                {item.title}
              </Link>
             
            </li>
            )
          })}
          <Link to = '/signup'><button className="signup-button">Sign up</button></Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar