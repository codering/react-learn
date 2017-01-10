import React from 'react'

import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'

import IndexPage from './routes/IndexPage'

export default function({history}) {
    return (
        <Router history={history}>
            <Route path='/' component={IndexPage}>
                    <Route path=":component" getComponent={(nextState, cb) => {
                        const {component} = nextState.params
                        const name = component.charAt(0).toUpperCase() + component.slice(1);
                        cb(null, require(`./routes/${name}Demo`));
                    }} />
            </Route>
        </Router>
    );
};

