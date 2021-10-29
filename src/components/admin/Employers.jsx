import React, {useEffect, useState} from 'react';
import {NavBreadcrumbs} from './controls/NavBreadcrumbs';
import s from '../../assets/scss/components/Navigator.module.scss';
import s2 from '../../assets/scss/components/Invites.module.scss';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
	usersBan,
	usersChangeExpirationDate,
	usersGetAll,
	usersImport,
	usersRemove,
	usersSetRole,
	usersUnban,
} from '../../store/users/actions';

export const Employers = () => {
	const users = useSelector(state => state.users);
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const [showChangeDialog, setShowChangeDialog] = useState(false);

	const [value] = useState(new Date());
	const [year, setYear] = useState(value.getFullYear());
	const [month, setMonth] = useState(value.getMonth());
	const [date, setDate] = useState(value.getDate());
	const [user, setUser] = useState(null);

	const showDialog = (user) => {
		setUser(user);
		setYear(new Date(user.trialExpiredAt).getFullYear());
		setMonth(new Date(user.trialExpiredAt).getMonth());
		setDate(new Date(user.trialExpiredAt).getDate());
		setShowChangeDialog(true);
	}

	const changeDate = (e) => {
		setDate(e.target.value);
	};

	const changeMonth = (e) => {
		setMonth(e.target.value);
	};

	const changeYear = (e) => {
		setYear(e.target.value);
	};

	useEffect(() => {
		dispatch(usersGetAll());
	}, [dispatch]);

	const remove = (id) => {
		dispatch(usersRemove(id));
	};

	const ban = (id) => {
		dispatch(usersBan(id));
	};

	const unban = (id) => {
		dispatch(usersUnban(id));
	};

	const changeRole = (id, role) => {
		dispatch(usersSetRole(id, role));
	};

	const [isLoading, setIsLoading] = useState(false);

	const csvSelected = async (e) => {
		if (e.target.files[0]) {
			setIsLoading(true);
			dispatch(usersImport(e.target.files[0]));

			setTimeout(() => {
				dispatch(usersGetAll());
				setIsLoading(false);
			}, 5000);
		}
	};

	const updateExpirationDate = () => {
		let newValue = new Date(year, month, date);
		newValue.setFullYear(year, month, date);
		if(newValue.getMonth() !== +month) {
			setDate(1);
			newValue.setFullYear(year, month, 1);
		}

		dispatch(usersChangeExpirationDate(user.id, newValue));
		setShowChangeDialog(false);

		setTimeout(() => {
			dispatch(usersGetAll());
		}, 1000);
	}

	return (
		<>
			<div className={s2.invites_Outer + (showChangeDialog ? ' ' : ' d-none')}>
				<div className={s2.invites_Inner}>
					<div className={s2.invites_InnerHeader}>
						<h3>Изменить пробный период</h3>
						<button onClick={() => setShowChangeDialog(false)}>&#10006;</button>
					</div>
					<div className={s2.invites_InnerBody}>
						<div className="row">
							<div className="col-12 mt-3">
								<h4>Активен до:</h4>
							</div>
							<div className="col-12">
								<div className="row">
									<div className="col-3 mt-1">
										<input type="text" className="form-control form-select-sm"
													 value={date} onChange={changeDate}
										/>
									</div>
									<div className="col-6 mt-1 p-0">
										<select className="form-select form-select-sm"
														value={month} onChange={changeMonth}>
											<option value="0">Январь</option>
											<option value="1">Февраль</option>
											<option value="2">Март</option>
											<option value="3">Апрель</option>
											<option value="4">Май</option>
											<option value="5">Июнь</option>
											<option value="6">Июль</option>
											<option value="7">Август</option>
											<option value="8">Сентябрь</option>
											<option value="9">Октябрь</option>
											<option value="10">Ноябрь</option>
											<option value="11">Декабрь</option>
										</select>
									</div>
									<div className="col-3 mt-1">
										<input type="text" className="form-control form-select-sm"
													 value={year} onChange={changeYear}/>
									</div>
								</div>
							</div>
							<div className="col-12 mt-1">
								<button className="btn btn-success float-end"
												onClick={updateExpirationDate}>
									Сохранить
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container min-vh-100">
				<div className="row">
					<div className="col-10 mt-3 mb-3">
						<NavBreadcrumbs/>
					</div>
					<div className="col-2 mt-3 mb-3 text-end">
						<input type="file" className="d-none" id="csv" onChange={csvSelected}
									 accept=".csv"/>
						<label className={'btn btn-sm ' + (isLoading ? 'btn-secondary' : 'btn-success')} htmlFor="csv">
							Импорт из CSV
						</label>
					</div>
				</div>
				<div className="row">
					<div className="col-12 mb-5">
						<div className="table-responsive-md">
							<table className="table table-sm table-bordered border-dark text-center">
								<thead>
								<tr className={s.table_Header}>
									<th scope="col">ID</th>
									<th scope="col">Имя пользователя</th>
									<th scope="col">E-mail</th>
									<th scope="col">Роль</th>
									<th scope="col">Пробный период</th>
									<th scope="col">Активен до</th>
									<th scope="col">Действия</th>
								</tr>
								</thead>
								<tbody>
								{
									users?.all.map(user => (
										<tr className={`${s.row}`} key={user.id}>
											<td>{user.id}</td>
											<td>
												{user.firstName} {user.lastName}
												{
													auth?.id === user.id && <b>&nbsp;(Это Вы)</b>
												}
											</td>
											<td>{user.email}</td>
											<td>
												{
													auth?.id !== user.id ?
														<select className="form-select form-select-sm" value={user.role}
																		onChange={(e) => changeRole(user.id, e.target.value)}>
															<option value="admin">Администратор</option>
															<option value="employee">Сотрудник</option>
														</select> :
														<select className="form-select form-select-sm" value={user.role}
																		onChange={(e) => changeRole(user.id, e.target.value)} disabled="1">
															<option value="admin">Администратор</option>
															<option value="employee">Сотрудник</option>
														</select>
												}
											</td>
											<td>{user.isTrial ? 'Да' : 'Нет'}</td>
											<td className="d-flex justify-content-center align-items-center"><span>{user.isTrial ?
												`${
													new Date(user.trialExpiredAt).getDate()
												}/${
													new Date(user.trialExpiredAt).getMonth() + 1
												}/${
													new Date(user.trialExpiredAt).getFullYear()
												}` : ''
											}</span>
												{
													user.isTrial &&
													<Link to="#" onClick={() => showDialog(user)} className="btn btn-sm btn-secondary"
																style={{marginLeft: '10px'}}>
														Изменить
													</Link>
												}
											</td>
											<td>
												{
													auth?.id !== user.id ?
														<>
															{
																!user.banned && <Link to="#" onClick={() => ban(user.id)}
																											className="btn btn-sm btn-secondary">Заблокировать</Link>
															}
															{
																user.banned && <Link to="#" onClick={() => unban(user.id)}
																										 className="btn btn-sm btn-secondary">Разблокировать</Link>
															}
															<Link to="#" onClick={() => remove(user.id)}
																		className="btn btn-sm btn-danger m-1">Удалить</Link>
														</> : <>&nbsp;</>
												}
											</td>
										</tr>
									))
								}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
