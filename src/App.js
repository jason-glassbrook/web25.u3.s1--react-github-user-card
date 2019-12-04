/// external modules ///
import React from 'react';

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
  'user' : {
    'name' : 'jason-glassbrook',
    'data' : {
      'self' : {},
      'followers' : [{}],
      'following' : [{}],
    },
  },
};

/***************************************
  COMPONENT
***************************************/
class App extends React.Component {
  constructor (props) {
    /* DEV */ console.log (`>>> App : constructing... <<<`);
    super (props);
    this.state = {
      'user' : init.user,
    };
  };

  componentDidMount () {
    /* DEV */ console.log (`>>> App : did mount... <<<`);
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
