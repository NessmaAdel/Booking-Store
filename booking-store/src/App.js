import React,{Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Register from './components/Register/register';
import Login from './components/login/login';
import Home from './components/Home/home';
import './App.scss';
import Profile from './components/Profile/profile';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/register' name="Register" component={Register}>
            
        </Route>
          <Route exact path='/login' name="Login" component={Login}>
            
          </Route>
          <Route exact path='/' name="Home" component={Home}>
            
          </Route>
          <Route exact path="/profile" name="Profile" component={Profile}>

          </Route>
        </Switch>
        </HashRouter>
    );
  }
}

export default App;
