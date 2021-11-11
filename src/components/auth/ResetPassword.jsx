import React, { useEffect, useState } from 'react';
import {authLoginMount, authLoginUnmount, authReset, authResetMount, authResetUnmount} from '../../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const ResetPassword = () => {
	const dispatch = useDispatch();
	const resetState = useSelector(state => state.auth.resetState);
	const [resetError, setResetError] = useState('');
	const [emailError, setEmailError] = useState('');

	useEffect(() => {
		dispatch(authResetMount());
		return () => {
			dispatch(authResetUnmount());
		}
	}, [dispatch]);

	const history = useHistory();
	useEffect(() => {
		if(resetState && resetState.success) {
			history.push('/auth/reset-succeeded');
		}

		if(resetState?.errorCode === 100)
			setResetError('E-mail не найден');
		else
			setResetError('');
	}, [resetState, history]);

	const [formData, setFormData] = useState({
		email: '',
	});

	const updateErrorMessageFor = (name, value) => {
		switch(name) {
			case 'email':
				if(value.trim() === '') setEmailError('Введите e-mail');
				else if(!value.match(/.@./)) setEmailError('Укажите корректный e-mail');
				else setEmailError('');
				break;
			default:
				break;
		}
		setResetError('');
	};

	const hasErrors = () => {
		let errors = false;
		Object.keys(formData).forEach((key) => updateErrorMessageFor(key, formData[key]));

		if(emailError !== '') {
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
			dispatch(authReset(formData));
		}
	}

	return (
		<div className="container min-vh-100">
			<div className="row">
				<div className="col-12 mt-5 text-center">
					<h5>Сбросить пароль</h5>
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
							<small className="mb-2 text-danger">{resetError}</small>
							<input type="submit" className="form-control btn btn-primary text-light"/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};