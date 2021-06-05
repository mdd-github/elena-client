import React from 'react';
import { Link } from 'react-router-dom';

export const PasswordChanged = () => {
	return (
		<div className='container min-vh-100'>
			<div className="row mt-5">
				<div className="col-12">
					<h5>Вы успешно сменили пароль.</h5>
					<span className="mt-3">Ван необходимо авторизоваться заново.</span><br/>
					<Link to='/auth/login' className="btn btn-lg btn-primary mt-3 text-light">Войти в аккаунт</Link>
				</div>
			</div>
		</div>
	);
};