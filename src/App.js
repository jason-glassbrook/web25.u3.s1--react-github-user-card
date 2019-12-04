/// external modules ///
import React from 'react';
import axios from 'axios';

/// internal modules ///
import immutably from './tools/immutably';
import UserCardsDeck from './components/GitHub/User/CardsDeck';

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

const setFieldOfState = (setState, field, valueFun) => {
  setState ((state, props) => ({
    [field] : valueFun (state, props),
  }));
}

const setStateData = (setState, point, data) => {
  setFieldOfState (setState, 'data',
    (state) => (immutably.set (state.data, point, data)),
  );
};

const getRemoteData = (point, args, handleResponse, handleError) => {
  /* DEV */ console.log (`--- ${point} : getting... ---`);
  axios
    .get (fullURL (urls.there.GH, point, ...args))
    .then ((axResponse) => {
      /* DEV */ console.log (`>>> ${point} : success <<<`);
      handleResponse (axResponse);
    })
    .catch ((axError) => {
      /* DEV */ console.warn (`>>> ${point} : failure <<<`);
      handleError (axError);
    })
    .finally (() => {
      /* DEV */ console.log (`--- ${point} : done. ---`);
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
    this.getRemoteData ('user', [this.state.user]);
    this.getRemoteData ('user_followers', [this.state.user]);
    this.getRemoteData ('user_following', [this.state.user]);
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
      <main className='App'>
        App
        <section id='user'>
          <UserCardsDeck
          row wrap
          users={[this.state.data.user]}
          />
        </section>
        <section id='user_followers'>
          <UserCardsDeck
          row wrap
          users={this.state.data.user_followers}
          />
        </section>
        <section id='user_following'>
          <UserCardsDeck
          row wrap
          users={this.state.data.user_following}
          />
        </section>
      </main>
    );
  };

  /***************************************
    data
  ***************************************/
  setStateData (point, data) {
    /*module.*/setStateData (
      (...x) => (this.setState (...x)) /* WHAT? WHY? */,
      point, data
    );
  };

  resetStateData (point) {
    this.setStateData (point, init.data[point])
  };

  getRemoteData (point, args) {
    /*module.*/getRemoteData (point, args,
      (axResponse) => (this.handleRemoteDataResponse (point, axResponse)),
      (axError) => (this.handleRemoteDataError (point, axError))
    );
  };

  handleRemoteDataResponse (point, axResponse) {
    console.log (point, axResponse);
    this.setStateData (point, axResponse.data)
  };

  handleRemoteDataError (point, axError) {
    console.warn (point, axError);
    this.resetStateData (point);
  };

  /**************************************/
};

/**************************************/
export default App;
