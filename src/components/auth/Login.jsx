import React, { useEffect, useState } from 'react';
import { authLogin, authLoginMount, authLoginUnmount } from '../../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const Login = () => {
	const dispatch = useDispatch();
	const loginState = useSelector(state => state.auth.loginState);
	const [loginError, setLoginError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	useEffect(() => {
		dispatch(authLoginMount());
		return () => dispatch(authLoginUnmount());
	}, [dispatch]);

	const history = useHistory();
	useEffect(() => {
		if(loginState && loginState.success) {
			history.push('/');
		}

		if(loginState?.errorCode === 3)
			setLoginError('Неверный логин или пароль');
		else if(loginState?.errorCode === 4)
			setLoginError('Аккаунт заблокирован');
		else
			setLoginError('');
	}, [loginState, history]);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const updateErrorMessageFor = (name, value) => {
		switch(name) {
			case 'password':
				if(value.trim() === '') setPasswordError('Введите пароль');
				else setPasswordError('');
				break;
			case 'email':
				if(value.trim() === '') setEmailError('Введите e-mail');
				else if(!value.match(/.@./)) setEmailError('Укажите корректный e-mail');
				else setEmailError('');
				break;
			default:
				break;
		}
		setLoginError('');
	};

	const hasErrors = () => {
		let errors = false;
		Object.keys(formData).forEach((key) => updateErrorMessageFor(key, formData[key]));

		if(emailError !== '' ||
			passwordError !== '') {
			errors = true;
		}

		return errors;
	};

	const onChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});

		updateErrorMessageFor(event.target.name, event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if(!hasErrors()) {
			dispatch(authLogin(formData));
		}
	}

	return (
		<div className="container min-vh-100">
			<div className="row">
				<div className="col-12 mt-5 text-center">
					<h5>Вход в аккаунт</h5>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-6 offset-md-3">
					<form onSubmit={onSubmit}>
						<div className="form-group mt-3">
							<small className="mb-2 text-danger">{emailError}</small>
							<input type="email" className="form-control" name="email"
										 value={formData.email} onChange={onChange} placeholder="Адрес электронной почты"/>
						</div>
						<div className="form-group mt-3">
							<small className="mb-2 text-danger">{passwordError}</small>
							<input type="password" className="form-control" name="password"
										 value={formData.password} onChange={onChange} placeholder="Пароль"/>
						</div>
						<div className="form-group mt-3">
							<small className="mb-2 text-danger">{loginError}</small>
							<input type="submit" className="form-control btn btn-primary text-light"/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};