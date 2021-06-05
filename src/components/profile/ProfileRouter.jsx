import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Profile from './Profile';
import {ChangePassword} from './ChangePassword';

export const ProfileRouter = () => {
	let { path } = useRouteMatch();

	return (
		<Switch>
			<Route path={`${path}/`} exact>
				<Profile/>
			</Route>
			<Route path={`${path}/change-password`}>
				<ChangePassword/>
			</Route>
			<Route path="*">
				<h1>Not found</h1>
			</Route>
		</Switch>
	);
};