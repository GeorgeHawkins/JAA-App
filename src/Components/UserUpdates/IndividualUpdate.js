import React, { useState } from 'react';
import OptionsDots from "./../../Images/OptionsDots.png";
import LikeIcon from "./../../Images/Like.png";
import LikedIcon from "./../../Images/Liked.png";
import Comment from "./../../Images/Comment.png";
import SW from "./../../Images/SW.png";
import CJ from "./../../Images/CJ.png";

function IndividualUpdate(props) {
  
  const { profilePicture, name, time, subject, messageBody } = props;
  const [Liked, setLiked] = useState(false);

  let picture;

  if (profilePicture === "SW") {
    picture = SW;
  } else if (profilePicture === "CJ") {
    picture = CJ;
  }

  return (
    <div className="UACard">
      <div className="NameTimeRow">
        <img src={picture} alt="" />
        <div className="PosterName">{name}</div>
        <div className="TimeOptionsFlex">
          <div className="PostTime">{time}</div>
          <img src={OptionsDots} alt="" />
        </div>

      </div>

      <div className="SubjectText">{subject}</div>

      <div className="UpdateBody">{messageBody}</div>

      <button className="SocialButtons" onClick={ () => setLiked(!Liked)}>
        <img src={Liked ? LikedIcon : LikeIcon} alt="" className="SocialIcons" />
        <span className={`${Liked ? 'LikedText' : ''}`}>{Liked ? 'Liked' : 'Like'}</span>
      </button>

      <button className="SocialButtons">
        <img src={Comment} alt="" className="SocialIcons" />
        Comment
      </button>

    </div>
  )
}

export default IndividualUpdate