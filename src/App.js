/// external modules ///
import React from 'react';
import axios from 'axios';

/// internal modules ///
// import remote from './tools/remotely/remote';

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
    this.getData ('user');
    this.getData ('user_followers');
    this.getData ('user_following');
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

  /***************************************
    remote
  ***************************************/
  getData (point) {
    console.log (`--- getting ${point}... ---`);
    axios
      .get (fullURL (urls.there.GH, point, this.state.user))
      .then ((axResponse) => {
        console.log (`>>> success <<<`);
        console.log (axResponse);
      })
      .catch ((axError) => {
        console.log (`>>> failure <<<`);
        console.log (axError);
      })
      .finally (() => {
        console.log (`--- ...well that's done. ---`);
      });
  }
};

/**************************************/
export default App;
