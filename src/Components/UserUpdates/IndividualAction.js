import React, { Component } from 'react';
import Picture from "./../../Images/SW.png";
import PDF from "./../../Images/PDFIcon.png";
import Approved from "./../../Images/Approved.png";

export default class IndividualAction extends Component {
  render() {
    const { action, time, file, meeting, meetingTime } = this.props;

    //Check whether the action has a file or a meeting time (just based on design example) and render the relevant info
    const fileMeeting = () => {
      if (file !== null) {
        return (
          <div className="FileMeetingRow">
            <img src={PDF} alt="file type" className="FileImages"/>
            <div className="FileText">{file}</div>
            <img src={Approved} alt="approval status" className="FileImages"/>
          </div>
        )
      } else {
        return (
          <div className="FileMeetingRow">
            <div className="MeetingText">{meeting} -&nbsp;</div>
            <div className="MeetingTimeText"> {meetingTime}</div>
          </div>
        )
      }
    }

    return (
      <div className="UACard">
        <div className="NameTimeRow">
                <img src={Picture} alt="" className="ActionsProfilePicture"/>
                <div className="ActionsBody"><span className="PosterName">You </span>{action}</div>
                <div className="TimeOptionsFlex">
                  <div className="PostTime">{time}</div>
                </div>
              </div>

              {fileMeeting()}
      </div>
    )
  }
}
