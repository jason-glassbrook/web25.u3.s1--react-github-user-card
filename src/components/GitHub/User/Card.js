/// external modules ///
import React from 'react';

/// internal modules ///
import Card from '../../basics/cards/Card';

/***************************************
  COMPONENT
***************************************/
class GitHub_User_Card extends React.Component {
  /***************************************
    lifecycle
  ***************************************/
  constructor (props) {
    /* DEV */ console.log (`>>> GitHub_User_Card : constructing... <<<`);
    super (props);
    this.state = {
    };
  };

  componentDidMount () {
    /* DEV */ console.log (`>>> GitHub_User_Card : did mount... <<<`);
  };

  componentDidUpdate () {
    /* DEV */ console.log (`>>> GitHub_User_Card : did update... <<<`);
  };

  componentWillUnmount () {
    /* DEV */ console.log (`>>> GitHub_User_Card : will unmount... <<<`);
  };

  render () {
    /* DEV */ console.log (`>>> GitHub_User_Card : rendering... <<<`);
    const { user } = this.props;
    return (
      <Card className='GitHub_User_Card'>
        <p>GitHub_User_Card</p>
        <p>login: {user.login}</p>
      </Card>
    );
  };

  /***************************************
    ...rest
  ***************************************/


  /**************************************/
};

/**************************************/
export default GitHub_User_Card;
