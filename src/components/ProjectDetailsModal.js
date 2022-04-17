import React from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import redCircle from "../images/red-circle.svg";
import yellowCircle from "../images/yellow-circle.svg";
import greenCircle from "../images/green-circle.svg";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

// import crossIcon from '../images/cross-icon.svg';

function ProjectDetailsModal(props) {
    if (props.data) {
        const technologies = props.data.technologies;
        const images = props.data.images;
        var title = props.data.title;
        var description = props.data.description;
        var url = props.data.url;
        if (props.data.technologies) {
            var tech = technologies.map((icons, index) => {
                return (
                    <li className="list-inline-item mx-3" key={index}>
                        <span>
                            <div className="text-center">
                                <img className="description-tech-icons" src={icons.icon} alt="" />
                                <p className="text-center" style={{ fontSize: "100%" }}>
                                    {icons.name}
                                </p>
                            </div>
                        </span>
                    </li>
                );
            });
            if (props.data.images) {
                var img = images.map((elem, i) => {
                    return <div key={i} data-src={elem} />;
                });
            }
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-inside"
        >
            <span onClick={props.onHide} className="modal-close">
                <i className="fas fa-times fa-3x close-icon"></i>
            </span>
            <div className="col-md-12">
                <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
                    <div className="slider-tab" style={{ paddingLeft: "6px" }}>
                        <img className="mac-icons slider-iconfiy" src={redCircle} alt="" />
                        &nbsp; <img className="mac-icons slider-iconfiy" src={yellowCircle} alt="" />{" "}
                        &nbsp; <img className="mac-icons slider-iconfiy" src={greenCircle} alt="" />
                    </div>
                    <AwesomeSlider
                        cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                        animation="scaleOutAnimation"
                        className="slider-image"
                    >
                        {img}
                    </AwesomeSlider>
                </div>
                <div className="col-md-10 mx-auto">
                    <h3 style={{ padding: "5px 5px 0 5px" }}>
                        {title}
                        {url ? (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-href"
                            >
                                <i
                                    className="fas fa-external-link-alt"
                                    style={{ marginLeft: "10px" }}
                                ></i>
                            </a>
                        ) : null}
                    </h3>
                    <p className="modal-description">{description}</p>
                    <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto">{tech}</ul>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProjectDetailsModal;
