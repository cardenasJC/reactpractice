// external
import React from 'react';
import Router from 'react-router';
import Route from 'react-router';
import IndexRoute from 'react-router';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

// internal
import MainLayout from 'components/MainLayout';
import Home from 'components/Home';
import Newbie from 'components/Newbie';
import Elementary from 'components/Elementary';

const Root = ( { children } ) =>
    <Router>
    <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path="newbie" component={Newbie} />
        <Route path="elementary" component={Elementary} />
    </Route>
  </Router>;

export default Root;

