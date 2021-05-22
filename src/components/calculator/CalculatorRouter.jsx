import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { Compatibility } from './Compatibility';
import { Personal } from './Personal';

export const CalculatorRouter = () => {
	let {path} = useRouteMatch();

	return (
		<Switch>
			<Route path={`${path}/personal`}>
				<Personal/>
			</Route>
			<Route path={`${path}/compatibility`}>
				<Compatibility/>
			</Route>
			<Route path="*">
				<h1>Not found</h1>
			</Route>
		</Switch>
	);
};