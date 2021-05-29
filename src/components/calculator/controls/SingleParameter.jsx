import React from 'react';
import s from '../../../assets/scss/components/Parameter.module.scss';

export const SingleParameter = (props) => {
	return (
		<div className={s.parameter}>
			<div className="row d-flex">
				<div>
				<div className="col-12">
					<span className={s.parameter_Title}>{props.title}</span>
				</div>
				<div className="col-12">
					<span className={s.parameter_Description}>{props.description}</span>
				</div>
				</div>
				<div className="col-12">
					<div className="d-flex justify-content-center">
						<div className={s.parameter_Value}>{props.value}</div>
					</div>
				</div>
			</div>
		</div>
	);
};