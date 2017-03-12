// external
import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

// internal
import MainLayout from 'components/MainLayout';
import Home from 'components/Home';
import Newbie from 'components/Newbie';
import Elementary from 'components/Elementary';

class Root extends React.Component {

    render() {
        return (
		    <Router history={browserHistory}>
		    <Route path="/" component={MainLayout}>
		        <IndexRoute component={Home} />
		        <Route path="newbie" component={Newbie} />
		        <Route path="elementary" component={Elementary} />
		    </Route>
		  </Router>
		)
    }

}
export default Root;

