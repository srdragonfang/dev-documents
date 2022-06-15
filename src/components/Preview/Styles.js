import React from "react";

const Styles = ({ data }) => {
  if (data) {
    var content = data.map((item, index) => {
      return (
        <section className="section" id={item.clickID}>
          <h1>{item.sectionTitle}</h1>
          <div className="section-list">
            {item.description.map((description, index) => {
              return (
                <a
                  href={description.clickURL}
                  className="section-item btn-effect-1"
                  key={index}
                >
                  {description.name}
                </a>
              );
            })}
          </div>
        </section>
      );
    });
  }
  return <div>{content}</div>;
};

export default Styles;
