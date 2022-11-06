import React, {useState} from 'react';

import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Market from './components/Market/Market';
import About from './components/About/About';

function App() {

  const [selector, setSelector] = useState('1');

  const menuSelectorHandler = (id) => {
    setSelector(id);
  }

  return (
    <div className="App">
      <Header onChangeSelector={menuSelectorHandler}></Header>
      {(selector === '1') && <Home></Home>}
      {(selector === '2') && <Market></Market>}
      {(selector === '3') && <About></About>}
    </div>
  );
}

export default App;
