import React from "react";
const Skills = ({ data }) => {
  if (data) {
    var language = data.languages.map((item, index) => {
      return (
        <div className="section-itemData" key={index}>
          <div className="section-item btn-effect-1">
            <a href={item.description.docURL}>{item.name}</a>
          </div>
          <div className="item-description">
            <div>
              <p>{item.description.stepOne}</p>
              <p>{item.description.stepTwo}</p>
              <p>{item.description.stepThree}</p>
              <p>{item.description.stepFour}</p>
              <p>{item.description.stepFive}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <section className="section" id="Documents">
      <h1>Documents</h1>
      <div className="section-list-sub">{language}</div>
    </section>
  );
};

export default Skills;
