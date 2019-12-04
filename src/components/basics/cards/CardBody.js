/// external modules ///
import React from 'react';

/// styles ///
import './styles.css';

/***************************************
  COMPONENT
***************************************/
const CardBody = ({ children , ...rest }) => {
  return (
    <main
    className={`card-body ${rest.className || ''}`.trim ()}
    >
      {children}
    </main>
  );
};

/**************************************/
export default CardBody;
