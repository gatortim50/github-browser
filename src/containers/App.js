import React from 'react'
import { Provider } from 'react-redux'

import configureStore from '../store/configureStore'
import Application from '../containers/Application'
import Navigator from '../config/router';

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Application />
  </Provider>
)

export default App
