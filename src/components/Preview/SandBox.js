import React from "react";

const SandBox = ({ data }) => {
  if (data) {
    var jsons = data.sandbox.json.map((item, index) => {
      return (
        <div className="section-itemData" key={index}>
          <div className="section-item btn-effect-1">
            <p>{item.name}</p>
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
      <h1>SandBox</h1>
      <div className="section-list-sub">{jsons}</div>
    </section>
  );
};

export default SandBox;
