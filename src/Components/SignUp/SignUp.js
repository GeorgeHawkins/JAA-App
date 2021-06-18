import React, { Component } from 'react';
import "./SignUp.css";
import Logo from "./../../Images/JAA_Logo.png";
import Eye from "./../../Images/EyeIcon.png";

export default class SignUp extends Component {
  render() {
    return (
      <div className="SignUpMain">

        <div className="SignUpContentWrapper">

          <img src={Logo} alt="" className="HeaderLogo"/>

          <div className="SubHeader">
            You have been invited to a project board by Joe Adsett Architects. To continue, complete your account creation by filling in the below details.
          </div>

          <form className="LoginForm" autoComplete="off" action="/JAA-App/#/home">
            <div className="FormDiv">
              <label className="FormLabel">Email</label>
              <input type="text" className="LoginInput" name="email" placeholder="susiewilson@emailadress.com" />
            </div>
            <div className="FormDiv">
              <label className="FormLabel">Name</label>
              <input type="text" className="LoginInput" name="name" placeholder="Susie Wilson" />
            </div>
            <div className="FormDiv PassDiv">
              <label className="FormLabel">Password</label>
              <input type="password" className="LoginInput PasswordInput" name="password" placeholder="*******************" />
              <button className="ShowPWButton" type="button"><img src={Eye} alt="" className="PWImage"/></button>
            </div>

            <div className="FormDiv">
              <button className="SignUpButton">Sign Up</button>
              
            </div>

          </form>

        </div>

      </div>
    )
  }
}
