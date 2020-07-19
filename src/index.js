import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
// react router

ReactDOM.render(<App />, document.getElementById('root'));
function App() {
  return (
    <Router>
      <>
        <Header cartSize={2} />
        <div>
          <h1>dede</h1>
        </div>
        <Footer />
      </>
    </Router>
  );
}
