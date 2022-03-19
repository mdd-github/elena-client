import React from 'react';
import { Switch, Route, useRouteMatch} from 'react-router-dom';
import {ExpiredPage} from "../ExpiredPage";
import {ExpiredEnterCode} from "./ExpiredEnterCode";

export const ExpiredRouter = () => {
    let { path } = useRouteMatch();
    console.log("expired")
    return (
        <Switch>
            <Route path={`${path}/`} exact>
                <ExpiredPage/>
            </Route>

            <Route path={`${path}/enter-code`}>
                <ExpiredEnterCode/>
            </Route>

            <Route path="*">
                <h1>Not found</h1>
            </Route>
        </Switch>
    );
};