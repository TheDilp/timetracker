import React from "react";

export default function ProfileCard({ selectedMode, setSelectedMode }) {
  function switchMode(mode) {
    setSelectedMode(mode);
  }
  const modes = ["Daily", "Weekly", "Monthly"];
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
          <h1 className="profileName">Jeremy Robson</h1>
        </div>
      </div>
      <div className="profileCardBottom">
        <div className="buttonWrapper">
          {modes.map((mode) => (
            <span
              key={mode}
              className="timeButton"
              onClick={() => switchMode(mode)}
              style={{ color: mode === selectedMode ? "white" : "" }}
            >
              {mode}
            </span>
          ))}
          {/* <span
            className="timeButton"
            onClick={() => switchMode("Daily")}
            style={{ color: selectedMode === "Daily" }}
          >
            Daily
          </span>
          <span className="timeButton" onClick={() => switchMode("Weekly")}>
            Weekly
          </span>
          <span className="timeButton" onClick={() => switchMode("Monthly")}>
            Monthly
          </span> */}
        </div>
      </div>
    </div>
  );
}
