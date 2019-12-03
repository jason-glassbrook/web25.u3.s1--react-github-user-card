/// external modules ///
import React from 'react';
import styled from 'styled-components';

/// internal modules ///
import Flex from '../Flex';

/// styles ///
import './styles.css';

/***************************************
  COMPONENT
***************************************/
const Container = Flex (styled.div ``);

const Card = ({ row , col , children , ...rest }) => {
  return (
    <Container
    className={`card ${rest.className || ''}`.trim ()}
    flex={{
      row : row , col : col ,
      wrap : false,
      lines : 'stretch',
      items : { across : 'stretch' , along : 'start' },
    }}
    >
      {children}
    </Container>
  );
};

/**************************************/
export default Card;
