/// external modules ///
import React from 'react';

/// internal modules ///
import CardsDeck from '../../basics/cards/CardsDeck';
import Card from './Card';

/***************************************
  STATES
***************************************/
const init = {};

/***************************************
  COMPONENT
***************************************/
class GitHub_User_CardsDeck extends React.Component {
  /***************************************
    lifecycle
  ***************************************/
  constructor (props) {
    /* DEV */ console.log (`>>> GitHub_User_CardsDeck : constructing... <<<`);
    super (props);
    this.state = {
    };
  };

  componentDidMount () {
    /* DEV */ console.log (`>>> GitHub_User_CardsDeck : did mount... <<<`);
  };

  componentDidUpdate () {
    /* DEV */ console.log (`>>> GitHub_User_CardsDeck : did update... <<<`);
  };

  componentWillUnmount () {
    /* DEV */ console.log (`>>> GitHub_User_CardsDeck : will unmount... <<<`);
  };

  render () {
    /* DEV */ console.log (`>>> GitHub_User_CardsDeck : rendering... <<<`);
    const { users , ...rest } = this.props;
    return (
      <CardsDeck className='GitHub_User_CardsDeck' {...rest}>
        {users.map ((user) => (
          <Card key={user.login} user={user}/>
        ))}
      </CardsDeck>
    );
  };

  /***************************************
    ...rest
  ***************************************/


  /**************************************/
};

/**************************************/
export default GitHub_User_CardsDeck;
