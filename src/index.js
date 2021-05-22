import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { applicationInitialize } from './store/application/actions';

const Application = (props) => {
	const dispatch = useDispatch();
	const applicationState = useSelector(state => state.application);

	useEffect(() => {
		dispatch(applicationInitialize());
	}, [dispatch]);

	return (
		<>
			{
				!applicationState.initialized ? <h1>Please wait..</h1> : <h1>Hello</h1>
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
