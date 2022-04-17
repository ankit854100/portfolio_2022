import React, { useState } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import laptopIcon from "../images/laptop-icon.svg";
import sunIcon from "../images/sun-icon.svg";
import owlIcon from "../images/owl-icon.svg";


function Header(props) {
  const [checked, setChecked] = useState(false);

  var titles = ["Front-end Developer", "Software Engineer"];
  titles = titles.map((x) => [x.toUpperCase(), 1500]).flat();

  const onThemeSwitchChange = (checked) => {
    setChecked(checked);
    onTheme();
  };

  const onTheme = () => {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  const HeaderTitleTypeAnimation = React.memo(
    () => {
      return (
        <Typical className="title-styles" steps={titles} loop={50} />
      );
    },
    (props, prevProp) => true
  );

  return (
    <header
      id="home"
      style={{ height: window.innerHeight - 140, display: "block" }}
    >
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <img className="iconify header-icon" src={laptopIcon} alt="" />
            <br />
            <br />
            <h1 className="mb-0">Ankit Anand</h1>
            <div className="title-container">
              <Typical className="title-styles" steps={titles} loop={50} />
            </div>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              id="icon-switch"
              uncheckedIcon={
                <img
                  className="iconify"
                  src={owlIcon}
                  alt=""
                  style={{
                    display: "inline-block",
                    height: "70%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    marginTop: "6px",
                    color: "#353239",
                  }}
                />
              }
              checkedIcon={
                <img
                  className="iconify"
                  src={sunIcon}
                  alt=""
                  style={{
                    display: "inline-block",
                    height: "70%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    marginTop: "6px",
                    color: "#353239",
                  }}
                />
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
