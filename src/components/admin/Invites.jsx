import React, { useEffect } from 'react';
import { NavBreadcrumbs } from './controls/NavBreadcrumbs';
import s from '../../assets/scss/components/Navigator.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { invitesCreate, invitesGetAll, invitesRemove } from '../../store/invites/actions';

export const Invites = () => {
	const invites = useSelector(state => state.invites);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(invitesGetAll());
	}, [dispatch]);


	return (
		<div className="container min-vh-100">
			<div className="row">
				<div className="col-10 mt-3 mb-3">
					<NavBreadcrumbs/>
				</div>
				<div className="col-2 mt-3 mb-3 text-end">
					<Link to="#" onClick={()=>dispatch(invitesCreate())} className="btn btn-success btn-sm">Сгенерировать</Link>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="table-responsive-md">
					<table className="table table-sm table-bordered border-dark text-center">
						<thead>
						<tr className={s.table_Header}>
							<th scope="col">ID</th>
							<th scope="col">Код</th>
							<th scope="col">Действителен до</th>
							<th scope="col">Действия</th>
						</tr>
						</thead>
						<tbody>
						{
							invites?.all?.map(invite => {
								const date = new Date(invite.expiresAt);
								return (
								<tr className={`${s.row}`} key={invite.id}>
									<td>{invite.id}</td>
									<td>{invite.value}</td>
									<td>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</td>
									<td>
										<Link to="#" onClick={() => dispatch(invitesRemove(invite.value))}>Удалить</Link>
									</td>
								</tr>
							)})
						}
						</tbody>
					</table>
				</div>
				</div>
			</div>
		</div>
	);
};