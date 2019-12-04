/// external modules ///
import React from 'react';
import axios from 'axios';

/// internal modules ///
import immutably from './tools/immutably';

/// styles ///
import './styles/App.css';

/// data ///
import { routes as urls, fullURL } from './data/app/routes';

/***************************************
  STATE
***************************************/
const init = {
  'user' : 'jason-glassbrook',
  'data' : {
    'user' : {},
    'user_followers' : [{}],
    'user_following' : [{}],
  },
};

const getRemoteData = (point, args, setState) => {
  console.log (`--- ${point} : getting... ---`);
  axios
    .get (fullURL (urls.there.GH, point, ...args))
    .then ((axResponse) => {
      console.log (`>>> ${point} : success <<<`);
      console.log (axResponse);
    })
    .catch ((axError) => {
      console.log (`>>> ${point} : failure <<<`);
      console.log (axError);
    })
    .finally (() => {
      console.log (`--- ${point}: done. ---`);
    });
};

/***************************************
  COMPONENT
***************************************/
class App extends React.Component {
  /***************************************
    lifecycle
  ***************************************/
  constructor (props) {
    /* DEV */ console.log (`>>> App : constructing... <<<`);
    super (props);
    this.state = {
      'user' : init.user,
      'data' : init.data,
    };
  };

  componentDidMount () {
    /* DEV */ console.log (`>>> App : did mount... <<<`);
    getRemoteData ('user', [this.user], this.setState);
    getRemoteData ('user_followers', [this.user], this.setState);
    getRemoteData ('user_following', [this.user], this.setState);
  };

  componentDidUpdate () {
    /* DEV */ console.log (`>>> App : did update... <<<`);
  };

  componentWillUnmount () {
    /* DEV */ console.log (`>>> App : will unmount... <<<`);
  };

  render () {
    /* DEV */ console.log (`>>> App : rendering... <<<`);
    return (
      <div className='App'>
        App
      </div>
    );
  };

};

/**************************************/
export default App;
