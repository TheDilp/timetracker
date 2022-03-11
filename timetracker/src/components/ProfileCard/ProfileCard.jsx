import React from "react";

export default function ProfileCard() {
  return (
    <div className="profileCard">
      <div className="profileCardTop">
        <img
          src={`${process.env.PUBLIC_URL}/image-jeremy.png`}
          className="profileCardImage"
          alt="Profile"
        />
        <div className="profileTopText">
          <div className="report">Report for</div>
          <div className="profileName">Jeremy Robson</div>
        </div>
      </div>
      <div className="profileCardBottom">
        <div className="buttonWrapper">
          <span className="timeButton">Daily</span>
          <span className="timeButton">Weekly</span>
          <span className="timeButton">Monthly</span>
        </div>
      </div>
    </div>
  );
}
