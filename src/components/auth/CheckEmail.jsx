import React from 'react';
import { Link } from 'react-router-dom';

export const CheckEmail = () => {
	return (
		<div className='container min-vh-100'>
			<div className="row mt-5">
				<div className="col-12">
					<h1>Вы успешно зарегистрированы.</h1>
					<span className="mt-3">На ваш e-mail было выслано письмо со ссылкой для подтверждения.</span><br/>
					<Link to='/auth/login' className="btn btn-lg btn-primary mt-3 text-light">Войти в аккаунт</Link>
				</div>
			</div>
		</div>
	);
};