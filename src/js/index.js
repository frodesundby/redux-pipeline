import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/App/Root'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore } from './store/configureStore'
import initialState from './store/initialState'

const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Root store={store} history={history}/>, document.getElementById('root')
)
