import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthRouter } from './auth/AuthRouter';
import { CalculatorRouter } from './calculator/CalculatorRouter';


export const Router = () => {
	const authState = useSelector((state) => state.auth);

	return (
		<Switch>
			<Route path="/" exact>
				<h1>IndexPage</h1>
			</Route>

			<Route path="/auth"> {
				authState.authorized
					? <Redirect to="/"/>
					: <AuthRouter/>
			} </Route>

			<Route path="/calculator"> {
				authState.authorized
					? <CalculatorRouter/>
					: <Redirect to="/"/>
			} </Route>

			<Route path="*">
				<h1>Not found</h1>
			</Route>
		</Switch>
	);
};