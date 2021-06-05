import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
	profileChangePassword,
	profileChangePasswordMount,
	profileChangePasswordUnmount,
} from '../../store/profile/actions';

export const ChangePassword = () => {
	const dispatch = useDispatch();
	const changePasswordState = useSelector(state => state.profile.changePassword);
	const [oldPasswordError, setOldPasswordError] = useState('');
	const [newPasswordError, setNewPasswordError] = useState('');

	useEffect(() => {
		dispatch(profileChangePasswordMount());
		return () => {
			dispatch(profileChangePasswordUnmount());
		}
	}, [dispatch]);

	const history = useHistory();
	useEffect(() => {
		if(changePasswordState && changePasswordState.success) {
			window.location.replace('/auth/password-changed');
		}

		if(changePasswordState?.errorCode === 3)
			setOldPasswordError('Неверный старый пароль');
		else
			setOldPasswordError('');
	}, [changePasswordState, history]);

	const [formData, setFormData] = useState({
		oldPassword: '',
		newPassword: '',
	});

	const updateErrorMessageFor = (name, value) => {
		switch(name) {
			case 'oldPassword':
				if(value.trim() === '') setOldPasswordError('Введите старый пароль');
				else setOldPasswordError('');
				break;
			case 'newPassword':
				if(value.trim() === '') setNewPasswordError('Укажите новый пароль');
				else if(!value.match(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{6,}/))
					setNewPasswordError('Пароль должен содержать следующие символы - A-Z, a-z, 0-9 и быть длиннее 6-ти знаков');
				else setNewPasswordError('');
				break;
			default:
				break;
		}
	};

	const hasErrors = () => {
		let errors = false;
		Object.keys(formData).forEach((key) => updateErrorMessageFor(key, formData[key]));

		if(oldPasswordError !== '' ||
			newPasswordError !== '') {
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
			dispatch(profileChangePassword(formData));
		}
	}

	return (
		<div className="container min-vh-100">
			<div className="row">
				<div className="col-12 mt-5 text-center">
					<h5>Сменить пароль</h5>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-6 offset-md-3">
					<form onSubmit={onSubmit}>
						<div className="form-group mt-3">
							<small className="mb-2 text-danger">{oldPasswordError}</small>
							<input type="password" className="form-control" name="oldPassword"
										 value={formData.oldPassword} onChange={onChange} placeholder="Старый пароль"/>
						</div>
						<div className="form-group mt-3">
							<small className="mb-2 text-danger">{newPasswordError}</small>
							<input type="password" className="form-control" name="newPassword"
										 value={formData.newPassword} onChange={onChange} placeholder="Новый пароль"/>
						</div>
						<div className="form-group mt-3">
							<input type="submit" className="form-control btn btn-primary text-light"/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};