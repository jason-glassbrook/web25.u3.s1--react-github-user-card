/// external modules ///
import React from 'react';

/***************************************
  STATES
***************************************/
const init = {};

/***************************************
  COMPONENT
***************************************/
class GithubUserCard extends React.Component {
  /***************************************
    lifecycle
  ***************************************/
  constructor (props) {
    /* DEV */ console.log (`>>> GithubUserCard : constructing... <<<`);
    super (props);
    this.state = {
    };
  };

  componentDidMount () {
    /* DEV */ console.log (`>>> GithubUserCard : did mount... <<<`);
  };

  componentDidUpdate () {
    /* DEV */ console.log (`>>> GithubUserCard : did update... <<<`);
  };

  componentWillUnmount () {
    /* DEV */ console.log (`>>> GithubUserCard : will unmount... <<<`);
  };

  render () {
    /* DEV */ console.log (`>>> GithubUserCard : rendering... <<<`);
    return (
      <div className='GithubUserCard'>GithubUserCard</div>
    );
  };

  /***************************************
    ...rest
  ***************************************/


  /**************************************/
};

/**************************************/
export default GithubUserCard;
