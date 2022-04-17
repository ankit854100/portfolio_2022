import React from "react";

function Skills(props) {
  if (props.sharedSkills && props.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.section_name.skills;
    var skills = props.sharedSkills.map(function (skills, i) {
      return (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-tile">
              <img className="description-tech-icons" src={skills.icon} alt=""/>
              <p
                className="text-center text-white skill-name"
                style={{ fontSize: "55%", marginTop: "10px" }}
              >
                {skills.name}
              </p>
            </div>
          </span>
        </li>
      );
    });
  }
  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
