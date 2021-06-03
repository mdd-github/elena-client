import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import s from '../../../assets/scss/components/AdminNav.module.scss';


export const NavBreadcrumbs = () => {
	let {path} = useRouteMatch();

	return (
		<div>
			<span className={s.breadcrumb}>
					{
						path !== '/admin/employers'
							?
							<h5>
								<NavLink to="/admin/employers" className="link-secondary">Сотрудники</NavLink>
							</h5>
							: <h5> Сотрудники </h5>
					}

				{
					path !== '/admin/invites'
						?
						<h5 className="">
								<NavLink to="/admin/invites" className="link-secondary">Коды приглашения</NavLink>
						</h5>
						: <h5 > Коды приглашения </h5>
				}
			</span>
		</div>
	);
};