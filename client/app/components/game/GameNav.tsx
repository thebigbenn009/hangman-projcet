import React from "react";

const GameNav = () => {
  return (
    <div className="game-header">
      <div className="header-1">
        <div className="menu-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="32"
            fill="none"
            viewBox="0 0 38 32"
          >
            <path fill="#fff" d="M0 0h38v7H0zM0 13h38v6H0zM0 25h38v7H0z" />
          </svg>
        </div>
        <h2>Countries</h2>
      </div>
      <div className="header-2">
        <div className="health-bar">
          <span></span>
        </div>
        <span className="icon-heart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="50"
            fill="none"
            viewBox="0 0 54 50"
          >
            <path
              fill="url(#a)"
              d="m26.667 49.467-3.867-3.52C9.067 33.493 0 25.253 0 15.2 0 6.96 6.453.533 14.667.533c4.64 0 9.093 2.16 12 5.547 2.906-3.387 7.36-5.547 12-5.547C46.88.533 53.333 6.96 53.333 15.2c0 10.053-9.066 18.293-22.8 30.747l-3.866 3.52Z"
            />
            <defs>
              <linearGradient
                id="a"
                x1="26.667"
                x2="26.667"
                y1="8.567"
                y2="49.467"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FE71FE" />
                <stop offset="1" stop-color="#7199FF" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default GameNav;
