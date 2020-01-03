import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CarShop from './pages/CarShop';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/carshop" component={CarShop} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
