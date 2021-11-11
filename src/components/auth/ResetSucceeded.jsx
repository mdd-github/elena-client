import React from 'react';
import { Link } from 'react-router-dom';

export const ResetSucceeded = () => {
	return (
		<div className='container min-vh-100'>
			<div className="row mt-5">
				<div className="col-12">
					<h1>Пароль успешно сброшен.</h1>
					<span className="mt-3">На ваш e-mail отправлено письмо с новым паролем!</span><br/>
					<Link to='/auth/login' className="btn btn-lg btn-primary mt-3 text-light">Войти в аккаунт</Link>
				</div>
			</div>
		</div>
	);
};