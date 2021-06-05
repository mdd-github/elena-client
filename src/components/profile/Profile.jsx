import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {profileGet} from '../../store/profile/actions';
import {Link} from 'react-router-dom';

const Profile = () => {
	const profileState = useSelector(state => state.profile)
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(profileGet());
	}, [dispatch]);

	return (
		<div className="container min-vh-100">
			<div className="row">
				<div className="col-12 mt-5 mb-3">
					<h5 className="mb-3">{profileState.firstName} {profileState.lastName}</h5>
					<div className="mt-2"><b>ID:</b> {profileState.id}</div>
					<div className="mt-2"><b>E-mail:</b> {profileState.email}</div>
					<div className="mt-2"><b>Статус:</b> {profileState.role === 'admin' ? 'Администратор' : 'Сотрудник'}</div>
					<div className="mt-2"><b>Пароль:</b> <Link to="/profile/change-password" className="btn btn-sm btn-primary">Сменить</Link></div>
				</div>
			</div>
		</div>
	);
};

export default Profile;