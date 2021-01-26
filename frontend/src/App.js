import React, {Component} from 'react';
import './App.css';

import BaseRouter from './Config/routes';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render () {

    return(
    <div className="App">
  
      <div className="routes"> 
            <BaseRouter></BaseRouter>
      </div>
    </div>
    )
  };
}

export default App;
