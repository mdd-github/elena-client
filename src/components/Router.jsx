import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthRouter } from './auth/AuthRouter';
import { CalculatorRouter } from './calculator/CalculatorRouter';
import { AdminRouter } from './admin/AdminRouter';
import {HomePage} from './HomePage';
import {ProfileRouter} from './profile/ProfileRouter';


export const Router = ({printRef}) => {
	const authState = useSelector((state) => state.auth);

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