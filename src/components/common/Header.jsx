import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../store/auth/actions';
import s from '../../assets/scss/components/Navbar.module.scss';
import logoPng from '../../assets/images/logo.png';


export const Header = () => {
	const authorized = useSelector(state => state.auth.authorized);
	const role = useSelector(state => state.auth.role);
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(authLogout());
	};

	const [collapsed, setCollapsed] = useState(true);

	const toggleCollapsed = () => setCollapsed(!collapsed);

	return (
		<header>
			<div className={`navbar navbar-expand-lg navbar-dark ${s.navbarBg}`}>
				<div className="container-fluid">
					<div className="">
						<Link to="/" className={`${s.brand} me-3`}>
							<img src={logoPng} alt="Logo" className="me-1"/>
							Нумерологическая<br/>матрица
						</Link>
					</div>

					<button className="navbar-toggler" type="button" onClick={toggleCollapsed}>
						<span className="navbar-toggler-icon"/>
					</button>

					<div className={`${collapsed && 'collapse'} navbar-collapse`}>
					{
						authorized &&
						<ul className="navbar-nav me-auto mb-2 mb-lg-0  mr-auto">
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
							{
								role === 'admin' &&
								<li className="nav-item">
									<NavLink to="/admin" className="nav-link">Администрирование</NavLink>
								</li>
							}

							<li className="nav-item">
								<Link to="#" onClick={onLogout} className="nav-link">Выход</Link>
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
			</div>
		</header>
	);
};