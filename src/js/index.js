import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import getRoutes from './routes'
import { Root } from './components/App/Root'

/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
import {configureStore} from './store/configureStore';
import {Root} from './containers/Root';

const store = configureStore();

ReactDOM.render(
    <div>balls deep</div>, document.getElementById('root')
)
/* <Provider store={store}>
 <Router history={history}>
 {getRoutes()}
 </Router>
 </Provider>*/