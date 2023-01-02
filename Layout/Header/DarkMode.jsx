import React, { Fragment, useState } from 'react';

const DarkMode = () => {
  const [lightDarkMode, setLightDarkMode] = useState(true);
  const handleChange = () => {
    setLightDarkMode(!lightDarkMode);
    lightDarkMode ? document.body.classList.add('dark-only') : document.body.classList.remove('dark-only');
  };
  return (
    <Fragment>
      <li>
        <div className='mode' onClick={() => handleChange()}>
          <span className='lnr lnr-moon'></span>
        </div>
      </li>
    </Fragment>
  );
};
export default DarkMode;
