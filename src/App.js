import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, createContext } from 'react';
import Home from './Components/home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UpdateForm from './Components/UpdatePage/UpdateForm';

export const userContext = createContext();


function App() {
  const [context, setContext] = useState('');
  return (
    <userContext.Provider value={[context, setContext]}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/student/info/update/" component={UpdateForm}></Route>
        </Switch>
      </Router>
    </userContext.Provider>

  );
}

export default App;
