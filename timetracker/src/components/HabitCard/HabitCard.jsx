import React from "react";

export default function HabitCard({ selectedMode, habit }) {
  return (
    <div className="habitCard" id={habit.title.toLowerCase()}>
      <div className="habitCardContent">
        <div className="habitCardIcon">
          <img
            src={`${
              process.env.PUBLIC_URL
            }/icon-${habit.title.toLowerCase()}.svg`}
            alt={habit.title}
          />
        </div>
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
            {habit.timeframes[selectedMode.toLowerCase()].current}hrs
          </span>
          <span className="previous">
            Last{" "}
            {selectedMode === "Daily"
              ? "Day"
              : selectedMode === "Weekly"
              ? "Week"
              : "Month"}{" "}
            - {habit.timeframes[selectedMode.toLowerCase()].previous}hrs
          </span>
        </div>
      </div>
    </div>
  );
}
