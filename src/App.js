import React from 'react';
import './App.css';
import Button_ from './components/Button_';
import Typography_ from './components/Typography_';
import Grid_ from './components/Grid_';
import Navbar from './components/Bootstrap/Navbar/Navbar';
import Carousal from './components/Bootstrap/Carousal';
import Jumbotron from './components/Bootstrap/Jumbotron/Jumbotron';

function App() {
  return (
    <div className="App">
      {/* <Button_ />
      <Typography_ /> */}
      {/* <Grid_ /> */}
      <Navbar />
      {/* <Carousal /> */}
      <Jumbotron />
    </div>
  );
}

export default App;
