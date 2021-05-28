import React, { useEffect, useState } from 'react';
import { authLogin, authLoginMount, authLoginUnmount } from '../../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const Login = () => {
	const dispatch = useDispatch();
	const loginState = useSelector(state => state.auth.loginState);

	useEffect(() => {
		dispatch(authLoginMount());
		return () => dispatch(authLoginUnmount());
	}, [dispatch]);

	const history = useHistory();
	useEffect(() => {
		if(loginState && loginState.success) {
			history.push('/');
		}
	}, [loginState, history]);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const onChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(authLogin(formData));
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 mt-5 text-center">
					<h1>Вход в аккаунт</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-6 offset-md-3">
					<form onSubmit={onSubmit}>
						<div className="form-group mt-3">
							<input type="email" className="form-control form-control-lg" name="email"
										 value={formData.email} onChange={onChange} placeholder="Адрес электронной почты"/>
						</div>
						<div className="form-group mt-3">
							<input type="password" className="form-control form-control-lg" name="password"
										 value={formData.password} onChange={onChange} placeholder="Пароль"/>
						</div>
						<div className="form-group mt-3">
							<input type="submit" className="form-control btn btn-lg btn-primary"/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};