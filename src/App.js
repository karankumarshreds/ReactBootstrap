import React from 'react';
import './App.css';
import Button_ from './components/Button_';
import Typography_ from './components/Typography_';
import Grid_ from './components/Grid_';
import Navbar from './components/Bootstrap/Navbar/Navbar';
import Carousal from './components/Bootstrap/Carousal';
import Jumbotron from './components/Bootstrap/Jumbotron/Jumbotron';
import _Grids from './components/Bootstrap/Grids/Grids';
import _ListGroup from './components/Bootstrap/ListGroups/ListGroup';
import Cards from './components/Bootstrap/Cards/Cards';
import CardsImage from './components/Bootstrap/Cards/CardsImage';
import CheckForms from './components/Bootstrap/CheckForms/CheckForms';
import Footer from './components/Bootstrap/Footer/Footer';
import ScrollSpyPage from './components/Bootstrap/Scrollspy/Scrollspy';
import Scrollspy from './components/Bootstrap/Scrollspy/Scrollspy';
function App() {
  return (
    <div className="App">
      {/* <Button_ />
      <Typography_ /> */}
      {/* <Grid_ /> */}
      <Navbar />
      {/* <Carousal /> */}
      <Jumbotron />
      {/* <_Grids /> */}
      {/* <_ListGroup /> */}
      <br/><br/><br/>
      <CardsImage/>
      <br/><br/>
      <CheckForms />
      <Footer />
      {/* <Scrollspy /> */}
    </div>
  );
}

export default App;
