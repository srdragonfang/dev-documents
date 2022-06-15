import React from "react";

const SandBox = ({ data }) => {
  if (data) {
    var sandbox = data.map((item, index) => {
      return (
        <div className="sandbox-container" key={index}>
          <h1>{item.sectionTitle}</h1>
          <div className="sandbox-list">
            {item.description.map((description, index) => {
              return (
                <div className="sandbox-item" key={index}>
                  <div className="sandbox-item-title"> {description.name}</div>
                  <div className="sandbox-item-description">
                    {description.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  }
  return <div className="sandbox">{sandbox}</div>;
};

export default SandBox;
