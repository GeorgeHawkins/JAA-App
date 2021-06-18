import React, { useState } from 'react';
import "./SettingsModal.css";
import SW from "./../../Images/SW.png";
import Eye from "./../../Images/EyeIcon.png";

function SettingsModal(props) {

  const [SettingsMode, setSettingsMode] = useState("default");

  const defaultSettings = () => {
    return (
      <div className="SettingsWrapper">
          <div className="SettingsHeader">Settings</div>
          <div className="SettingsSubHeader">Edit your account settings and save when you are finished</div>

          <button className="SettingsButton" onClick={ () => setSettingsMode("profile")}>Profile</button>
          <button className="SettingsButton" onClick={ () => setSettingsMode("password")}>Change Password</button>
          <button className="SettingsButton" onClick={ () => setSettingsMode("notification")}>Notifications</button>

          <div className="BottomButtonsRow">
            <button className="SettingsButton CancelButton" onClick={ () => props.setTrigger(false)}>Cancel</button>
            <button className="SettingsButton SaveButton">Save</button>
          </div>
      </div>    
    )
  }

  const profileSettings = () => {
    return (
      <div className="SettingsWrapper">
        <div className="SettingsHeader">Profile Settings</div>
          <div className="SettingsSubHeader">Edit your profile and save when you are finished</div>

          <div className="SettingsWhiteDiv"><img src={SW} className="SettingsImage" alt=""/> <button className="UploadButton">Upload</button> </div>
          <div className="SettingsInputDiv">
              <label className="FormLabel SettingsLabel">Email</label>
              <input type="text" className="LoginInput" name="email" placeholder="susiewilson@emailadress.com" />
            </div>
            <div className="SettingsInputDiv">
              <label className="FormLabel SettingsLabel">Name</label>
              <input type="text" className="LoginInput" name="name" placeholder="Susie Wilson" />
          </div>


          <div className="BottomButtonsRow">
            <button className="SettingsButton CancelButton" onClick={ () => setSettingsMode("default")}>Cancel</button>
            <button className="SettingsButton SaveButton">Save</button>
          </div>
      </div>
    )
  }

  const passwordSettings = () => {
    return (
      <div className="SettingsWrapper">
        <div className="SettingsHeader">Change Password</div>
          <div className="SettingsSubHeader">Set a new password by filling in the below fields</div>

          <div className="SettingsInputDiv">
              <label className="FormLabel SettingsLabel">Existing Password</label>
              <input type="password" className="LoginInput PasswordInput" name="password" placeholder="*******************" />
            </div>
          
          <div className="SettingsInputDiv PassDiv">
              <label className="FormLabel SettingsLabel">New Password</label>
              <input type="password" className="LoginInput PasswordInput" name="password" placeholder="*******************" />
              <button className="ShowPWButton"><img src={Eye} alt="" className="PWImage"/></button>
            </div>


          <div className="BottomButtonsRow">
            <button className="SettingsButton CancelButton" onClick={ () => setSettingsMode("default")}>Cancel</button>
            <button className="SettingsButton SaveButton">Save</button>
          </div>
      </div>
    )
  }

  const notificationSettings = () => {
    return (
      <div className="SettingsWrapper">
        <div className="SettingsHeader">Notifications</div>
          <div className="SettingsSubHeader">Edit your notification preferences using the below toggles</div>

          <div className="SettingsWhiteDiv NotificationsDiv">
            <div className="NotificationsBolder">Email Notifications</div>
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="SettingsWhiteDiv NotificationsDiv">
            <div>Mentioned Updates</div>
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div><div className="SettingsWhiteDiv NotificationsDiv">
            <div>Comments on your Update</div>
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div><div className="SettingsWhiteDiv NotificationsDiv">
            <div>Approved Documents</div>
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>


          <div className="BottomButtonsRow">
            <button className="SettingsButton CancelButton" onClick={ () => setSettingsMode("default")}>Cancel</button>
            <button className="SettingsButton SaveButton">Save</button>
          </div>
      </div>
    )
  }


  const settingsSwitch = () => {
    switch (SettingsMode) {
      case "default":
        return defaultSettings();
      case "profile":
        return profileSettings();
      case "password":
        return passwordSettings();
      case "notification":
        return notificationSettings();
      default:
        return defaultSettings();
    }
  }

  return (props.trigger) ? (
    <div className="SettingsModal">
      <div className="SettingsMain">

          { settingsSwitch() }

      </div>
    </div>
  ) : "";
}

export default SettingsModal
