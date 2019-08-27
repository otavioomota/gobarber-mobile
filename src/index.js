import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from './App';

import './config/ReacototronConfig';
import { store, persistor } from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <App />
      </PersistGate>
    </Provider>
  );
}
