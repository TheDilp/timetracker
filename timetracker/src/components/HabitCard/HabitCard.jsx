import React from "react";

export default function HabitCard() {
  return (
    <div className="habitCard">
      <div className="habitCardContent">
        <div className="cardContentTop">
          <span>Work</span>
          <span>
            <img
              src={`${process.env.PUBLIC_URL}/icon-ellipsis.svg`}
              alt="DotDotDot"
            />
          </span>
        </div>
        <div className="cardContentCenter">
          <span className="current">32hrs</span>
          <span className="previous">Last Week - 36hrs</span>
        </div>
      </div>
    </div>
  );
}
