import React from "react";
import { useState } from "react";
// import { useHover } from "./useHover";
function BigCard(props) {
  // const [hovering, handlers] = useHover();
  const [hover, setHover] = useState(false);
  return (
    <div className="col-lg-3">
      <div
        className={`card no-borders 
        ${props.darkMode ? "bg-card-dark" : "bg-card"}${hover ? "-hover" : ""}
        ${props.border}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="card-body">
          <h6 className=" d-flex justify-content-center">
            <i
              className={`bi bi-caret-${props.socialIcon} ${props.socialIconColor}`}
            ></i>
            <span className="text-secondary ms-2 bold-text">{props.name}</span>
          </h6>
          <h1 className="card-title d-flex justify-content-center bold-text">
            {props.title}
          </h1>
          <p className="card-text d-flex justify-content-center text-secondary">
            {props.subTitle}
          </p>
          <h6
            className={`${
              props.arrow === "up" ? "text-success" : "text-danger"
            } d-flex justify-content-center bold-text`}
          >
            <i className={`bi bi-caret-${props.arrow}-fill`}></i>
            <span>{props.footer}</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
export default BigCard;
