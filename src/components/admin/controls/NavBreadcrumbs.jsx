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
							<span>
								<NavLink to="/admin/employers" className="link-secondary">Сотрудники</NavLink>
							</span>
							: <span> Сотрудники </span>
					}

				{
					path !== '/admin/invites'
						?
						<span className="">
								<NavLink to="/admin/invites" className="link-secondary">Коды приглашения</NavLink>
						</span>
						: <span > Коды приглашения </span>
				}
			</span>
		</div>
	);
};