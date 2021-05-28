import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authRegister, authRegisterMount, authRegisterUnmount } from '../../store/auth/actions';

export const Register = () => {
	const dispatch = useDispatch();
	const registerState = useSelector(state => state.auth.registerState);

	useEffect(() => {
		dispatch(authRegisterMount());
		return () => dispatch(authRegisterUnmount());
	}, [dispatch]);


	const history = useHistory();
	useEffect(() => {
		if(registerState && registerState.success) {
			history.push('/auth/check-email');
		}
	}, [registerState, history]);

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		invite: '',
	});

	const onChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(authRegister(formData));
	}

	return (
		<div className="container">
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
									<input type="text" className="form-control form-control-lg" name="firstName"
												 value={formData.firstName} onChange={onChange} placeholder="Ваше имя"/>
								</div>
								<div className="form-group mt-3">
									<input type="text" className="form-control form-control-lg" name="lastName"
												 value={formData.lastName} onChange={onChange} placeholder="Фамилия"/>
								</div>
								<div className="form-group mt-3">
									<input type="email" className="form-control form-control-lg" name="email"
												 value={formData.email} onChange={onChange} placeholder="Адрес электронной почты"/>
								</div>
								<div className="form-group mt-3">
									<input type="password" className="form-control form-control-lg" name="password"
												 value={formData.password} onChange={onChange} placeholder="Пароль"/>
								</div>
								<div className="form-group mt-3">
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