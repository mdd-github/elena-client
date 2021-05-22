import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';

export const AuthRouter = () => {
	let { path } = useRouteMatch();

	return (
		<Switch>
			<Route path={`${path}/register`}>
				<Register/>
			</Route>
			<Route path={`${path}/login`}>
				<Login/>
			</Route>
			<Route path="*">
				<h1>Not found</h1>
			</Route>
		</Switch>
	);
};