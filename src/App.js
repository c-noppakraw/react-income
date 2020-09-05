import React from 'react';
import { Provider } from 'react-redux';
import store from './reducer';
import Navbar from '../src/components/Nav/Nav'
import Todo from './components/Todo/Todo'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar/>
        <Todo/>
      </div>
    </Provider>
  );
}

export default App;
