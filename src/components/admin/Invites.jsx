import React from 'react';
import { NavBreadcrumbs } from './controls/NavBreadcrumbs';
import s from '../../assets/scss/components/Navigator.module.scss';
import { Link } from 'react-router-dom';

export const Invites = () => {
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
							<th scope="col">Код</th>
							<th scope="col">Действителен до</th>
							<th scope="col">Действия</th>
						</tr>
						</thead>
						<tbody>
						<tr className={`${s.row}`}>
							<td>1</td>
							<td>invite</td>
							<td>1/07/2021</td>
							<td>
								<Link to="#" >Удалить</Link>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
				</div>
			</div>
		</div>
	);
};