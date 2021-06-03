import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authRegister, authRegisterMount, authRegisterUnmount } from '../../store/auth/actions';

export const Register = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const registerState = useSelector(state => state.auth.registerState);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		invite: '',
	});
	const [firstNameError, setFirstNameError] = useState('');
	const [lastNameError, setLastNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [inviteError, setInviteError] = useState('');

	useEffect(() => {
		dispatch(authRegisterMount());
		return () => dispatch(authRegisterUnmount());
	}, [dispatch]);
	useEffect(() => {
		if(registerState && registerState.success) {
			history.push('/auth/check-email');
		}

		if(registerState?.errorCode === 7)
			setEmailError('Аккаунт с таким e-mail уже существует');
		else
			setEmailError('');

		if(registerState?.errorCode === 8)
			setInviteError('Неверный код приглашения');
		else
			setInviteError('');
	}, [registerState, history]);



	const updateErrorMessageFor = (name, value) => {
		switch(name) {
			case 'firstName':
				if(value.trim() === '') setFirstNameError('Укажите ваше имя');
				else setFirstNameError('');
				break;
			case 'lastName':
				if(value.trim() === '') setLastNameError('Укажите фамилию');
				else setLastNameError('');
				break;
			case 'email':
				if(value.trim() === '') setEmailError('Укажите e-mail');
				else if(!value.match(/.@./)) setEmailError('Укажите корректный e-mail');
				else setEmailError('');
				break;
			case 'password':
				if(value.trim() === '') setPasswordError('Укажите пароль');
				else if(!value.match(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{6,}/))
					setPasswordError('Пароль должен содержать следующие символы - A-Z, a-z, 0-9 и быть длиннее 6-ти знаков');
				else setPasswordError('');
				break;
			case 'invite':
				if(value.trim() === '') setInviteError('Укажите код приглашения');
				else setInviteError('');
				break;
			default:
				break;
		}
	};

	const hasErrors = () => {
		let errors = false;
		Object.keys(formData).forEach((key) => updateErrorMessageFor(key, formData[key]));

		if(firstNameError !== '' ||
			lastNameError !== '' ||
			emailError !== '' ||
			passwordError !== '' ||
			inviteError !== '') {
			errors = true;
		}

		return errors;
	};

	const onChange = async (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
		updateErrorMessageFor(event.target.name, event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		if(!hasErrors()) {
			dispatch(authRegister(formData));
		}
	};

	return (
		<div className="container mb-5 min-vh-100">
			<div className="row">
				<div className="col-12 mt-5 text-center">
					<h1>Регистрация</h1>
				</div>
			</div>
			{
				registerState != null && !registerState.waitForResponse
					? <div className="row">
						<div className="col-12 col-md-6 offset-md-3">
							<form onSubmit={onSubmit}>
								<div className="form-group mt-3">
									<small className="mb-2 text-danger">{firstNameError}</small>
									<input type="text" className="form-control form-control-lg" name="firstName"
												 value={formData.firstName} onChange={onChange} placeholder="Ваше имя"/>
								</div>
								<div className="form-group mt-3">
									<small className="mb-2 text-danger">{lastNameError}</small>
									<input type="text" className="form-control form-control-lg" name="lastName"
												 value={formData.lastName} onChange={onChange} placeholder="Фамилия"/>
								</div>
								<div className="form-group mt-3">
									<small className="mb-2 text-danger">{emailError}</small>
									<input type="email" className="form-control form-control-lg" name="email"
												 value={formData.email} onChange={onChange} placeholder="Адрес электронной почты"/>
								</div>
								<div className="form-group mt-3">
									<small className="mb-2 text-danger">{passwordError}</small>
									<input type="password" className="form-control form-control-lg" name="password"
												 value={formData.password} onChange={onChange} placeholder="Пароль"/>
								</div>
								<div className="form-group mt-3">
									<small className="mb-2 text-danger">{inviteError}</small>
									<input type="text" className="form-control form-control-lg" name="invite"
												 value={formData.invite} onChange={onChange} placeholder="Код приглашения"/>
								</div>
								<div className="form-group mt-3">
									<input type="submit" className="form-control btn btn-lg btn-primary"/>
								</div>
							</form>
						</div>
					</div>
					: <div/>
			}

		</div>
	);
};