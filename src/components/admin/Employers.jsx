import React, { useEffect } from 'react';
import { NavBreadcrumbs } from './controls/NavBreadcrumbs';
import s from '../../assets/scss/components/Navigator.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usersGetAll } from '../../store/users/actions';

export const Employers = () => {
	const users = useSelector(state => state.users);
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(usersGetAll());
	}, [dispatch]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 mt-3 mb-3">
					<NavBreadcrumbs/>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
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
										<td>{user.role}</td>
										<td>
											{
												auth?.id !== user.id &&
												<>
													<Link to="#">Заблокировать</Link> | <Link to="#">Удалить</Link>
												</>
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