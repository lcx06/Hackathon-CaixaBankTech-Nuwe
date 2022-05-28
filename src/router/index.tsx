import React, {FunctionComponent, ReactElement} from "react";
import {Redirect, Route} from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Home from "../pages/Home";

interface AppRoute {
    path: string;
    title?: string;
    component?: FunctionComponent;
    breadcrumbs?: string[];
    content_title?: string;
    content_subtitle?: string;
    redirect?: string;
}

const routes: AppRoute[] = [
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
        result.push(<Route exact path={route.path} key={route.path}>
            { route.component && <Dashboard component={route.component} />}
            { route.redirect && <Redirect to={route.redirect} />}
        </Route>)
    }
    return result;
}

export function getRouterInfo(path: string): AppRoute {
    for (const route of routes) {
        if (route.path === path) return route;
    }
    return {
        path,
        title: '',
        breadcrumbs: [],
        content_title: '',
        content_subtitle: ''
    };
}

export default getRenderedRoutes;