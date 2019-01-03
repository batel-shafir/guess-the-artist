//here all routes
import React from 'react';
import State from './State';
import { Switch , Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path = "/" component={State}/>
    </Switch>
)

export default Main;