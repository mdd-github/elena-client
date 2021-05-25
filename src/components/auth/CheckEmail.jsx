import React from 'react';
import { Link } from 'react-router-dom';

export const CheckEmail = () => {
	return (
		<div className='container'>
			<div className="row mt-5">
				<div className="col-12">
					<h1>Вы успешно зарегистрированы.</h1>
					<span className="mt-3">На Ваш e-mail отправлено письмо с подтверждением. Проверьте "Входящие"</span><br/>
					<Link to='/auth/login' className="btn btn-lg btn-primary mt-3">Войти в аккаунт</Link>
				</div>
			</div>
		</div>
	);
};