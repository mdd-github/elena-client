import React, {useEffect, useState} from 'react';
import {NavBreadcrumbs} from './controls/NavBreadcrumbs';
import s from '../../assets/scss/components/Navigator.module.scss';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {usersBan, usersGetAll, usersRemove, usersSetRole, usersUnban} from '../../store/users/actions';

export const Employers = () => {
	const users = useSelector(state => state.users);
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();


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
	}

	return (
		<div className="container min-vh-100">
			<div className="row">
				<div className="col-12 mt-3 mb-3">
					<NavBreadcrumbs/>
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
										<td >
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
										<td>
											{
												auth?.id !== user.id ?
													<>
														{
															!user.banned && <Link to="#" onClick={() => ban(user.id)} className="btn btn-sm btn-secondary">Заблокировать</Link>
														}
														{
															user.banned && <Link to="#" onClick={() => unban(user.id)} className="btn btn-sm btn-secondary">Разблокировать</Link>
														}
														<Link to="#" onClick={() => remove(user.id)} className="btn btn-sm btn-danger m-1">Удалить</Link>
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
	);
};