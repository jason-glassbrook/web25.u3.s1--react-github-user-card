/// external modules ///
import React from 'react';

/// styles ///
import './styles.css';

/***************************************
  COMPONENT
***************************************/
const CardHead = ({ children , ...rest }) => {
  return (
    <header
    className={`card-head ${rest.className || ''}`.trim ()}
    >
      {children}
    </header>
  );
};

/**************************************/
export default CardHead;
