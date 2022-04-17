import React from "react";
import profilePic from "../images/my-picture.jpeg";
import reactIcon from "../images/react-icon.svg";
import redCircle from "../images/red-circle.svg";
import yellowCircle from "../images/yellow-circle.svg";
import greenCircle from "../images/green-circle.svg";

function About(props) {
  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{props.sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img height="250px" src={profilePic} alt="" />
                <img
                  src={reactIcon}
                  alt=""
                  style={{ margin: "0.5rem auto 0", height: "5rem" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <img 
                    className="mac-icons"
                    src={redCircle}
                    alt=""
                  />
                  &nbsp;{" "}
                  <img 
                    className="mac-icons"
                    src={yellowCircle}
                    alt=""
                  />{" "}
                  &nbsp;{" "}
                  <img 
                    className="mac-icons"
                    src={greenCircle}
                    alt=""
                  />
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{props.hello} :) </span>
                  <br />
                  <br />
                  {props.about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
