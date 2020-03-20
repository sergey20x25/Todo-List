import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navigation } from './components/Navigation';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';

const App = () => (
  <FirebaseState>
    <AlertState>
      <BrowserRouter>
        <Navigation />
        <div className="container pt-4">
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  </FirebaseState>
);

export default App;
