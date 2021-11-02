import React from 'react';
import { Redirect, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import FuniroPage from './pages/FuniroPage/src/index';
import HomePage from './pages/HomePage/index';
import FigmaLandPage from './pages/FigmaLandPage/index';
import ItStudioPage from './pages/ItStudioPage/src/index';
import ErrorPage from './pages/ErrorPage/index';
import AddCardPage from './pages/AddCardPage/index';
import { Provider } from 'react-redux';
import store from './store';

const Routes = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Redirect exact path='/' to='home' />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/funiro' component={FuniroPage} />
        <Route exact path='/figma-land' component={FigmaLandPage} />
        <Route exact path='/it-studio-page' component={ItStudioPage} />
        <Route exact path='/card' component={AddCardPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Provider>
  )
};

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
    // </Provider>
  );
}

export default App;
