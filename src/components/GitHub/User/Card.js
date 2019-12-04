/// external modules ///
import React, {Fragment} from 'react';

/// internal modules ///
import Card from '../../basics/cards/Card';
import CardHead from '../../basics/cards/CardHead';
import CardBody from '../../basics/cards/CardBody';
import CardFoot from '../../basics/cards/CardFoot';

/// styles ///
import './styles.css';

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
        <CardHead>
          <img
          className='card-image'
          src={user.avatar_url}
          alt={`avatar of ${user.login}`}
          />
        </CardHead>
        <CardBody>
          <h4>{user.login}</h4>
          {user.name ? (<p>{user.name}</p>) : (<Fragment/>)}
        </CardBody>
        <CardFoot>
          <a href={user.html_url}>{user.html_url}</a>
        </CardFoot>
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
