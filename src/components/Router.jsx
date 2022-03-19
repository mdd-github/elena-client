import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthRouter} from './auth/AuthRouter';
import {CalculatorRouter} from './calculator/CalculatorRouter';
import {AdminRouter} from './admin/AdminRouter';
import {HomePage} from './HomePage';
import {ProfileRouter} from './profile/ProfileRouter';
import {ExpiredRouter} from "./expired/ExpiredRouter";


export const Router = ({printRef}) => {
    const authState = useSelector((state) => state.auth);

    if(!authState.authorized) {
        return (
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>

                <Route path="/auth">
                    <AuthRouter/>
                </Route>

                <Route path="*">
                    <Redirect to="/"/>
                </Route>
            </Switch>
        )
    }

    if((authState.isTrial && authState.trialBefore < new Date())) {
        return (
            <Switch>
                <Route path="/expired">
                    <ExpiredRouter/>
                </Route>

                <Route path="*">
                    <Redirect to="/expired"/>
                </Route>
            </Switch>
        )
    }



    return (
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>

            <Route path="/auth"> {
                authState.authorized
                    ? <Redirect to="/"/>
                    : <AuthRouter/>
            } </Route>

            <Route path="/admin"> {
                authState.authorized && authState.role === 'admin'
                    ? <AdminRouter/>
                    : <Redirect to="/"/>
            } </Route>

            <Route path="/profile"> {
                authState.authorized
                    ? <ProfileRouter/>
                    : <Redirect to="/"/>
            } </Route>

            <Route path="/calculator"> {
                authState.authorized
                    ? <CalculatorRouter printRef={printRef}/>
                    : <Redirect to="/auth"/>
            } </Route>

            <Route path="*">
                <h1>Not found</h1>
            </Route>
        </Switch>
    );
};