import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
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
import ProductDetails from './pages/ProductDetails';
import rootReducer from './store/reducers';

// react router
const store = createStore(rootReducer);
ReactDOM.render(<App />, document.getElementById('root'));
function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/products" />} />
            <Route exact path="/products" component={Home} />
            <Route exact path="/product/:id" component={ProductDetails} />
          </Switch>
          <Footer />
        </>
      </Router>
    </Provider>
  );
}
