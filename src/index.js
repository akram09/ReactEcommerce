import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './index.scss';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
// react router

ReactDOM.render(<App />, document.getElementById('root'));
function App() {
  return (
    <Router>
      <>
        <Header cartSize={2} />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/products" />} />
          <Route exact path="/products" component={Home} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}
