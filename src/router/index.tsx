import React, {ReactElement} from "react";
import {Redirect, Route} from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Home from "../pages/Home";

const routes = [
    {
        path: '/home',
        title: 'Dashboard',
        component: Home,
        breadcrumbs: [
            "Dashboard"
        ],
        content_title: 'Transactions history',
        content_subtitle: 'These are your monthly and daily actions. 📊'
    },
    {
        path: '/',
        redirect: '/home'
    }
]

function getRenderedRoutes(): ReactElement[] {
    const result = [];
    for (const route of routes) {
        // @ts-ignore
        result.push(<Route exact path={route.path}>
            { route.component && <Dashboard component={route.component} />}
            { route.redirect && <Redirect to={route.redirect} />}
        </Route>)
    }
    return result;
}

export default getRenderedRoutes;