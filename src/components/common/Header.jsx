import React, {useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../store/auth/actions';
import s from '../../assets/scss/components/Navbar.module.scss';
import logoPng from '../../assets/images/logo.png';
import ReactToPrint from 'react-to-print';


export const Header = ({printRef}) => {
	const authState = useSelector((state) => state.auth);
	const authorized = useSelector(state => state.auth.authorized);
	const role = useSelector(state => state.auth.role);
	const isTrial = useSelector(state => state.auth.isTrial);
	const trialBefore = useSelector(state => state.auth.trialBefore);
	const dispatch = useDispatch();
	const path = useLocation();

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
							Проект<br/>Светланы Титовой
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

							{
								((path.pathname === '/calculator/compatibility' || path.pathname === '/calculator/personal') && !(authState.isTrial && authState.trialBefore < new Date())) &&
								<li className="nav-item">
									<ReactToPrint
										trigger={() => {
											return (<Link to="#" className="nav-link">
												Распечатать
											</Link>);
										}}
										content={() => printRef.current}
									/>

								</li>
							}
						</ul>
					}

					{
						authorized &&
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">

							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								   data-bs-toggle="dropdown" aria-expanded="false">
									Аккаунт
								</a>
								<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
									{
										role === 'admin' &&
										<li>
											<NavLink to="/admin" className="nav-link dropdown-item">Администрирование</NavLink>
										</li>
									}

									<li>
										<Link to="/profile/change-password" className="nav-link dropdown-item">Сменить пароль</Link>
									</li>

									<li>
										<Link to="#" onClick={onLogout} className="nav-link dropdown-item">Выход</Link>
									</li>
								</ul>
							</li>

							{
								isTrial &&
								<li className="nav-item">
									<span className="nav-link text-danger fw-bold">
										Доступ до {trialBefore.getDate()}.{trialBefore.getMonth() + 1}
									</span>
								</li>
							}

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
