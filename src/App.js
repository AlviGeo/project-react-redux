import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import Increment from './components/Increment';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <increment />
      </header>
    </div>
  );
}
export default App;