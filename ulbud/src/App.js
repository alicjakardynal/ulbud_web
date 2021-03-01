import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import Realization from './components/Realization';
import References from './components/References';
import Job from './components/Job';
import Contact from './components/Contact';


function App() {
  return (<>

 <HashRouter>
 <Switch>
  <Route exact path='/' component={Home} onUpdate={() => document.body.scrollTo(0, 0)}/>
  <Route exact path='/realization' component={Realization} onUpdate={() => window.scrollTo(0, 0)}/>
  <Route exact path='/references' component={References} onUpdate={() => window.scrollTo(0, 0)}/>
  <Route exact path='/job' component={Job}/>
  <Route exact path='/contact' component={Contact}/>
  </Switch>
   <Footer/>
   </HashRouter>
  </>
  );
}

export default App;
