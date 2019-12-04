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
const Container = Flex (styled.ol ``);

const CardsDeck = ({ row, col, wrap, keys, children, ...rest }) => {
  return (
    <Container
    className={`cards-deck ${rest.className || ''}`.trim ()}
    flex={{
      row : row, col : col,
      wrap : wrap,
      lines : 'stretch',
      items : { across : 'stretch', along : 'start' },
    }}
    >
      {React.Children.map (children, (item, i) => (
        <li key={keys[i]}>{item}</li>
      ))}
    </Container>
  );
};

/**************************************/
export default CardsDeck;
