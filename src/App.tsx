import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import ProductPage from './components/ProductPage/ProductPage';
import AuthContextProvider from './services/auth';
import NonPrivateRoute from './components/Generic/Routes/NonPrivateRoute/NonPrivateRoute';



function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <NonPrivateRoute path='/login' component={Login} />
          <NonPrivateRoute path='/signup' component={Signup} />
          <Route path='/products' component={Products} />
          <Route path='/product/:id' component={ProductPage} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
