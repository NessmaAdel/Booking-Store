import React,{Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Register from './components/Register/register';
import Login from './components/login/login';
import './App.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route  path='/' name="Register" component={Register}></Route>
          <Route exact path='/login' name="login" component={Login}></Route>
        </Switch>
        </HashRouter>
    );
  }
}

export default App;
