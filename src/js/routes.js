import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './components/App/App';
import NotFound from './components/NotFound/NotFound';

export default () => {
    console.log("getting routes")
    return (
        <Route path="/" component={ App }>
            { /* Home (main) route */ }

            <Route path="*" component={NotFound} status={404} />
        </Route>
    );
};
