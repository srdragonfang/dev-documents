import React from "react";

const Navbars = ({ data }) => {
  if (data) {
    var navbar = data.map((item, index) => {
      return (
        <div className="sideNav-container">
          <a href={`#${item.clickID}`}>{item.sectionTitle}</a>
        </div>
      );
    });
  }
  return <div className="sideNav">{navbar}</div>;
};

export default Navbars;
