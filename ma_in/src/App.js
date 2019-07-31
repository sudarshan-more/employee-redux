import React from 'react';
import './App.css';
import form from "./components/form";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Registerformjson from './components/Registerformjson';
import loginjson from './components/loginjson';
import profilejson from './components/profilejson';
import editprofilejson from './components/editprofilejson';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
          <Switch>
            <Route exact path="/form" component={form}/>
            <Route exact path="/registerjson" component={Registerformjson}/>
            <Route exact path="/loginjson" component={loginjson}/>
            <Route exact path="/profilejson" component={profilejson}/>
            <Route exact path="/editprofilejson" component={editprofilejson}/>


          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
