import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import laptopIcon from "../images/laptop-icon.svg";
import sunIcon from "../images/sun-icon.svg";
import moonIcon from "../images/moon-icon.svg";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    var name = "Ankit Anand";
    this.titles = this.props.designations.map(x => [ x.toUpperCase(), 1500 ] ).flat();

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header
        id="home"
        style={{display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <img className="iconify header-icon" src={laptopIcon} alt="" />
              <br />
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                // offColor="#baaa80"
                offColor="#519259"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                id="icon-switch"
                uncheckedIcon={
                  <img
                    className="iconify"
                    src={moonIcon}
                    alt=""
                    style={{
                      display: "inline-block",
                      height: "70%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "15px",
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
}

export default Header;
