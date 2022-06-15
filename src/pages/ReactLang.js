import React from "react";
const ReactLang = ({ data }) => {
  if (data) {
    var document = data.documents.map((item, index) => {
      return (
        <a
          href={item.clickURL}
          className="section-item btn-effect-1"
          key={index}
        >
          <div className="item-title">{item.name}</div>
          <span>{item.language}</span>
        </a>
      );
    });
    var uiicon = data.uiicons.map((item, index) => {
      return (
        <a
          href={item.clickURL}
          className="section-item btn-effect-1"
          key={index}
        >
          <div className="item-title">{item.name}</div>
          <span>{item.language}</span>
        </a>
      );
    });
  }
  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <section className="section" id="Styles">
          <h1>Documents</h1>
          <div className="section-list">{document}</div>
        </section>
        <section className="section" id="Styles">
          <h1>UI Icons</h1>
          <div className="section-list">{uiicon}</div>
        </section>
      </div>
    </div>
  );
};

export default ReactLang;
