import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Nav';
import Home from './Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
      </Router>
    </div>
  );
}

export default App;
