import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../store/auth/actions';

export const Header = () => {
	const authorized = useSelector(state => state.auth.authorized);
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(authLogout());
	};

	return (
		<header>
			<div className="navbar navbar-expand-lg navbar-dark bg-theme">
				<div className="container-fluid">
					<div className="">
						<Link to="/" className="navbar-brand">Матрица судьбы</Link>
					</div>

					{
						authorized &&
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink to="/calculator/personal" className="nav-link" activeClassName="active">
									Персональный расчёт
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/calculator/compatibility" className="nav-link" activeClassName="active">
									Расчёт совместимости
								</NavLink>
							</li>
						</ul>
					}

					{
						authorized &&
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/profile" className="nav-link" aria-current="page">Профиль</Link>
							</li>
							<li className="nav-item">
								<Link to="#" onClick={onLogout} className="nav-link" href="#">Выход</Link>
							</li>
						</ul>
					}

					{
						!authorized &&
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/auth/login" className="nav-link">Вход</Link>
							</li>
							<li className="nav-item">
								<Link to="/auth/register" className="nav-link">Регистрация</Link>
							</li>
						</ul>
					}
				</div>
			</div>
		</header>
	);
};