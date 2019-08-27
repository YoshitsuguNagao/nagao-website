import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Lineup from './pages/Lineup';
import BusinessGuide from './pages/BusinessGuide';
import Recruit from './pages/Recruits';
import Contact from './pages/Contact';
import News from './pages/News';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/lineup" component={Lineup} />
          <Route exact path="/lineup/:model" component={Details} />
          <Route exact path="/business-guide" component={BusinessGuide} />
          <Route exact path="/recruit" component={Recruit} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/news/:newsId" component={News} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
