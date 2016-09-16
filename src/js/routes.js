import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { Root } from './components/App/Root';

export default () => {
    return (
        <Route path="/" component={Root}>
            { /* Home (main) route */ }
            <IndexRoute component={Home}/>

            <Route path="*" component={NotFound} status={404} />
        </Route>
    );
};
