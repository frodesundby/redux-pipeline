import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import DevTools from './DevTools';
import getRoutes from '../../routes'


/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
    render() {
        const { store, history } = this.props
        console.log("in root")
        return (
            /**
             * Provider is a component provided to us by the 'react-redux' bindings that
             * wraps our app - thus making the Redux store/state available to our 'connect()'
             * calls in component hierarchy below.
             */
            <Provider store={store}>
                <Router history={history}>
                    {getRoutes()}
                    {/* Being the dev version of our Root component, we include DevTools below */}
                    <DevTools />
                </Router>
            </Provider>
        );
    }
};
