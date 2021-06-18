import React, { useState } from 'react';
import "./UserUpdates.css";
import Logo from "./../../Images/JAA_Logo_Cropped.png";
import Notification from "./../../Images/NotificationIcon.png";
import Discussion from "./../../Images/Discussion.png";
import PreDev from "./../../Images/PreDev.png";
import Dev from "./../../Images/Dev.png";
import PostDev from "./../../Images/PostDev.png";
import Buildings from "./../../Images/Buildings.png";
import UpdateCard from "./IndividualUpdate.js";
import ActionCard from "./IndividualAction.js";
import SettingsModal from "./SettingsModal.js";
import './Calendar.css';


export default function UserUpdates() {
  // This state variable is used to determine whether to display updates or actions,updates = true, actions = false
  const [UA, setUA] = useState(true);

  //State for whether settings modal should show or not
  const [OpenSettings, setOpenSettings] = useState(false);

  const updateSection = () => {
    return (
      <div className="UpdatesSection">
        <input type="text" placeholder="Post an Update..." className="UpdateInput" />

        <UpdateCard profilePicture="SW" name="Susie Wilson" time="Today 12:05 pm" subject="Meeting"
          messageBody="Hi @Cameron, do you think we could have a meeting sometime next week? Let me know what times you are free and I can book in the best option for me." />

        <UpdateCard profilePicture="CJ" name="Cameron Jones" time="Sat 1:15pm" subject="Start of Pre-Development"
          messageBody="Hi Again @Susie, now that the plan has been signed off on, the pre-development stage begins! Let me know if you have any questions, otherwise we can get started on the details." />
      </div>
    )
  }

  const actionsSection = () => {
    return (
      <div className="ActionsSection">
        <ActionCard action="approved a document" time="Fri 2:34pm" file="Lot 423 Plan_05_03_21.pdf" meeting="" meetingTime="" />

        <ActionCard action="selected a meeting time" time="Wed 2:34pm" file={null} meeting="Electrical meeting" meetingTime="01/05 Mon 3:00pm-4:00pm" />

        <ActionCard action="approved a document" time="Fri 2:34pm" file="Lot 423 Plan_05_03_21.pdf" meeting="" meetingTime="" />

        <ActionCard action="selected a meeting time" time="Wed 2:34pm" file={null} meeting="Electrical meeting" meetingTime="01/05 Mon 3:00pm-4:00pm" />
      </div>
    )
  }

  const onClickUpdates = () => {
    setUA(true);
  }

  const onClickActions = () => {
    setUA(false);
  }

    return (
      <div className="UpdatesMain">

        <div className="UserMain">
          <img src={Logo} alt="" className="SmallLogo"/>
          <div className="UserSection">

            <div className="UserIcons">
              <div className="UserBubble">SW</div>
              <img src={Notification} alt="" className="NotificationIcon"/>
            </div>
            <div className="ClientName">Susie Wilson</div>
            <div className="ClientSubHead">Client</div>

            <div className="LotDiv">Lot 432</div>
            

            <div className="UserOptions">
              <div className="UserBottomText SettingsText" onClick={ () => setOpenSettings(true)}>Settings</div>
              <div className="UserBottomText">Log Out</div>
            </div>
          </div>
        </div>

        <div className="ContentMain">



        <div className="HeaderTabs">
          <button className="TabButton NoMargin"> 
          Plan Discussion 
          <img src={Discussion} alt="" className="TabIcons"/></button>

          <button className="TabButton TabButton_Highlighted">
          Pre-Development
          <img src={PreDev} alt="" className="TabIcons"/></button>

          <button className="TabButton">
          Development
          <img src={Dev} alt="" className="TabIcons"/></button>

          <button className="TabButton">
          Post-Development
          <img src={PostDev} alt="" className="TabIcons"/></button>

        </div>

          <img src={Buildings} alt="" className="BannerImage"/>
      
          <div className="UpdatesActionsMain">
          <div className="UATabs">
              
              <button className={`TabButton TabButton__UA TabActive ${UA ? 'TabActive' : 'TabInactive'}` } onClick={onClickUpdates}>Updates</button>

              <button className={`TabButton TabButton__UA MarginLeft ${UA ? 'TabInactive' : 'TabActive'}`} onClick={onClickActions}>Actions</button>
          </div>
          <div className="ScrollWrapper">
            <div className="UAWrapper">
              
              
              {/* display updates or actions content based on state */}
              {UA ? updateSection() : actionsSection()}

              
            </div>

          </div>
            

          </div>

        </div>

        <div className="CalendarEventsSection">
        <div class="month">      
            <ul class="CalendarHeader">
            <li class="prev">&#10094;</li>
            
            <li class="monthName">March</li>
            <li class="next">&#10095;</li>
          </ul>
        </div>

<ul class="weekdays">
  <li>M</li>
  <li>T</li>
  <li>W</li>
  <li>T</li>
  <li>F</li>
  <li>S</li>
  <li>S</li>
</ul>

<ul class="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li><span class="active">11</span></li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>


        <hr className="LineSeperator"/>

        <div className="EventsHeading">Upcoming Events</div>

        <div className="EventsSection">
          <div className="EventCard">
            <div>Electrical Meeting</div>
            <div className="EventTime">2:00pm Mon 05/04/21</div>
          </div>

          <div className="EventCard">
            <div>Contract Meeting</div>
            <div className="EventTime">10:00am Thu 08/04/21</div>
          </div>

          <div className="EventCard">
            <div>Construction Starts</div>
            <div className="EventTime">6:00am Wed 21/04/21</div>
          </div>
          

        </div>

        <SettingsModal trigger={OpenSettings} setTrigger={setOpenSettings} />

        </div>
        
      </div>
    )
}
