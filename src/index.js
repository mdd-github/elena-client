import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from './store';
import { applicationInitialize } from './store/application/actions';
import { Router } from './components/Router';
import { Layout } from './components/common/Layout';

import './assets/scss/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';


const Application = (props) => {
	const dispatch = useDispatch();
	const applicationState = useSelector(state => state.application);

	useEffect(() => {
		dispatch(applicationInitialize());
	}, [dispatch]);

	const printRef = useRef();

	return (
		<>
			{
				applicationState.initialized &&
				<BrowserRouter>
					<Layout printRef={printRef}>
						<Router printRef={printRef}/>
					</Layout>
				</BrowserRouter>
			}
		</>
	);
}
;


ReactDOM.render(
<Provider store={store}>
	<Application/>
</Provider>
,
document.getElementById('root'),
);
