import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Mainpage from './components/Mainpage/Mainpage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

function App() {
  library.add(far,fas)
  return (
    <div className="App">
     <Mainpage />
    </div>
  );
}

export default App;
