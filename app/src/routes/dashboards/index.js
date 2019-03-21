/** @format */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import defaultDash from './default';
import planner from './planner';
import places from './places';
import placedetails from './placedetails';
import contentDash from './content';
import analyticsDash from './analytics';
import ecommerceDash from './ecommerce';

const Dashboards = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
            <Route path={`${match.url}/default`} component={defaultDash} />
            <Route path={`${match.url}/planner`} component={planner} />
            <Route path={`${match.url}/places`} component={places} />
            <Route path={`${match.url}/placedetails`} component={placedetails} />
            <Route path={`${match.url}/content`} component={contentDash} />
            <Route path={`${match.url}/ecommerce`} component={ecommerceDash} />
            <Route path={`${match.url}/analytics`} component={analyticsDash} />
            <Redirect to="/error" />
        </Switch>
    </div>
);
export default Dashboards;
