import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header  from './Components/Header';
import Top_Header  from './Components/Top_Header';
import Footer  from './Components/Footer';
import Slider  from './Components/Slider';
import Sub_Footer  from './Components/Sub_Footer';
import Central  from './Components/Central';
import Testimonials from './Components/Testimonials';
import Accueil from './Components/Accueil';
import A_Propos from './Components/A_Propos';
import Hadith from './Components/Hadith';
import Contact from './Components/Contact';
import Histoire_prophete from './Components/Histoire_prophete';
import Coran from './Components/Coran';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Top_Header></Top_Header>
      <Header />
     
     
  
     
      <Route exact path="/Accueil" component={Accueil} />
      <Route exact path="/Testimonials" component={Testimonials} />
      <Route exact path="/A_propos" component={A_Propos} />
      <Route exact path="/Hadith" component={Hadith} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Histoire_prophète" component={Histoire_prophete} />
        <Route exact path="/Coran" component={Coran} />
     
  
     
     
     
     
     </Router>
   
    </div>
  );
}

export default App;
