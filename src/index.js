import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from './store';
import { applicationInitialize } from './store/application/actions';
import { ApplicationLoader } from './components/ApplicationLoader';

import './assets/scss/styles.scss';
import { Router } from './components/Router';


const Application = (props) => {
	const dispatch = useDispatch();
	const applicationState = useSelector(state => state.application);

	useEffect(() => {
		dispatch(applicationInitialize());
	}, [dispatch]);

	return (
		<>
			{
				applicationState.initialized
					? <Router/>
					: <ApplicationLoader/>
			}
		</>
	);
};


ReactDOM.render(
	<Provider store={store}>
		<Application/>
	</Provider>,
	document.getElementById('root'),
);
