import React from 'react';
import {Switch, Route, useRouteMatch, Redirect} from 'react-router-dom';
import {Login} from './Login';
import {Register} from './Register';
import {CheckEmail} from './CheckEmail';
import {PasswordChanged} from './PasswordChanged';
import {ResetPassword} from './ResetPassword';
import {ResetSucceeded} from './ResetSucceeded';

export const AuthRouter = () => {
    let {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/`} exact>
                <Redirect to={`${path}/login`}/>
            </Route>
            <Route path={`${path}/register`}>
                <Register/>
            </Route>
            <Route path={`${path}/login`}>
                <Login/>
            </Route>
            <Route path={`${path}/reset`}>
                <ResetPassword/>
            </Route>
            <Route path={`${path}/check-email`}>
                <CheckEmail/>
            </Route>
            <Route path={`${path}/reset-succeeded`}>
                <ResetSucceeded/>
            </Route>
            <Route path={`${path}/password-changed`}>
                <PasswordChanged/>
            </Route>
            <Route path="*">
                <h1>Not found</h1>
            </Route>
        </Switch>
    );
};