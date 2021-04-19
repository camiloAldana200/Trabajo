import React, {useState} from 'react';
import Home from './components/Home'
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [checkLogin, setCheckLogin] = useState(false);
  

  return (
    
    <Router>
     
        <Switch>
              <Route path="/login">  
                <Login 
                setCheckLogin={setCheckLogin}
                />
              </Route>
              <Route exact path="/">  
                <Home checkLogin={checkLogin}>
                
                </Home>
              </Route>
        </Switch>
    </Router>
     
    
    
    
  );
}

export default App;
