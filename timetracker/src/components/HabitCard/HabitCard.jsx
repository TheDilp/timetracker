import React from "react";

export default function HabitCard({ selectedMode, habit }) {
  return (
    <div className="habitCard">
      <div className="habitCardContent">
        <div className="cardContentTop">
          <span>{habit.title}</span>
          <span>
            <img
              src={`${process.env.PUBLIC_URL}/icon-ellipsis.svg`}
              alt="DotDotDot"
            />
          </span>
        </div>
        <div className="cardContentCenter">
          <span className="current">
            {habit.timeframes[selectedMode.toLowerCase()].current}
          </span>
          <span className="previous">
            Last{" "}
            {selectedMode === "Daily"
              ? "Day"
              : selectedMode === "Weekly"
              ? "Week"
              : "Month"}{" "}
            - {habit.timeframes[selectedMode.toLowerCase()].previous}
          </span>
        </div>
      </div>
    </div>
  );
}
