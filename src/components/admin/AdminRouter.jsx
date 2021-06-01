import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Employers } from './Employers';
import { Invites } from './Invites';

export const AdminRouter = () => {
	let { path } = useRouteMatch();

	return (
		<Switch>
			<Route path={`${path}/`} exact>
				<Redirect to={`${path}/employers`}/>
			</Route>
			<Route path={`${path}/employers`}>
				<Employers/>
			</Route>
			<Route path={`${path}/invites`}>
				<Invites/>
			</Route>
			<Route path="*">
				<h1>Not found</h1>
			</Route>
		</Switch>
	);
};