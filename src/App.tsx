import React from 'react';
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Signup  from './components/Signup/Signup';
import Login   from './components/Login/Login';
import Products from './components/Products/Products';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/products' component={Products} />
          <Route path='/product/:id' component={ProductPage} />
        </Switch>
    </Router>
  );
}

export default App;
