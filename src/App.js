import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Mainpage from './components/Mainpage/Mainpage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  library.add(fas, far)
  return (
    <div className="App">
     <Mainpage />
    </div>
  );
}

export default App;
