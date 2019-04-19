import React, { Component } from 'react';
import './App.css';

import Accordion from './components/accordion';

class App extends Component {
  render() {
    // co the dong mo the nhu html binh thuong va noi dung ben trong se thuoc childer hay props.children
    return (
      <div className = "App">
        <Accordion heading = "Heading">
          Lorems demo
        </Accordion>
        <Accordion heading = "Heading 2" content = "Lorems demo 2" />
      </div>
    );
  }
}

export default App;
