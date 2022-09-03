import React from "react";
import { useState } from "react";
function SmallCard(props) {
  const [hover, setHover] = useState(false);
  return (
    <div className="col-lg-3">
      <div
        className={`card border-0 mb-5
        ${props.darkMode ? "bg-card-dark" : "bg-card"}${hover ? "-hover" : ""}
        ${props.border}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="card-body">
          {/* top */}
          <div className="d-flex justify-content-between mb-4">
            <h6 className="text-secondary bold-text ">{props.title}</h6>
            <i className={`${props.socialIcon} ${props.socialIconColor}`}></i>
          </div>
          {/* bottom */}
          <div className="d-flex justify-content-between">
            <h4 className="bold-text ">{props.number}</h4>
            <h6
              className={`${
                props.arrow === "up" ? "text-success" : "text-danger"
              } d-flex justify-content-center bold-text`}
            >
              <i className={`bi bi-caret-${props.arrow}-fill`}></i>
              <span>{props.percentage}</span>
            </h6>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default SmallCard;
