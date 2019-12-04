/// external modules ///
import React from 'react';

/// internal modules ///
import CardsDeck from '../../basics/cards/CardsDeck';
import Card from './Card';

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
    const { users, ...rest } = this.props;
    const keys = users.map ((user) => (user.id));
    return (
      <CardsDeck
      className='GitHub_User_CardsDeck'
      keys={keys}
      {...rest}>
        {users.map ((user, i) => (
          <Card key={keys[i]} user={user}/>
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
