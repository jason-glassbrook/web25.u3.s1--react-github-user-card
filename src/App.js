/// external modules ///
import React from 'react';

/// styles ///
import './styles/App.css';

/// data ///
import { routes as urls, fullURL } from './data/app/routes';

/***************************************
  COMPONENT
***************************************/
class App extends React.Component {
  constructor (props) {
    console.log (`>>> App : constructing... <<<`);
    super (props);
    this.state = {
    };
  };

  componentDidMount () {
    console.log (`>>> App : did mount... <<<`);
  };

  componentDidUpdate () {
    console.log (`>>> App : did update... <<<`);
  };

  componentWillUnmount () {
    console.log (`>>> App : will unmount... <<<`);
  };

  render () {
    console.log (`>>> App : rendering... <<<`);
    return (
      <div className='App'>
        App
      </div>
    );
  };
};

/**************************************/
export default App;
