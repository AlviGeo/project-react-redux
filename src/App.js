import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Button } from 'reactstrap';
import store from './store';
import './App.css';



const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)




function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
