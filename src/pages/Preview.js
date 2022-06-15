import React, {useState, useEffect} from 'react';

import Navbars from '../components/Preview/Navbars';
import Styles from '../components/Preview/Styles';

const Preview = ({data}) => {
  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <Styles data={data} />
      </div>
      <Navbars data={data} />
    </div>
  );
};

export default Preview;
