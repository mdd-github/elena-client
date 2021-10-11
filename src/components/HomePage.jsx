import React from 'react';
import s from '../assets/scss/components/Home.module.scss'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export const HomePage = () => {
	const authState = useSelector((state) => state.auth);

	return (
		<div className={s.home}>
			<div className={s.home_Inner + '  ps-3 pe-3'}>
				<span className={s.home_Orange}>
					Numero процессор
				</span>
				<h1 className={s.home_Title}>
					Нумерологическая матрица по дате
				</h1>
				<span className={s.home_Description}>
					Навигатор для ясной и понятной жизни,<br/>
					без лишней мистики и предрассудков.
				</span>
				{
					!authState.authorized &&
					<div className={s.home_Buttons}>
						<Link to="/auth/login" className={s.home_ButtonOrange}>Войти</Link>
						<Link to="/auth/register" type="button">Зарегистрироваться</Link>
					</div>
				}
				{
					authState.authorized &&
					<div className={s.home_Buttons}>
						<Link to="/calculator" className={s.home_ButtonOrange}>Начать</Link>
					</div>
				}
			</div>
		</div>
	);
};
