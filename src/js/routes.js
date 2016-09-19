import React from 'react';
import {IndexRoute, Route} from 'react-router';
import  App  from './components/App/App';

export default () => {
    console.log("getting routes")
    return (
        <Route path="/" component={App} />

    );
};
