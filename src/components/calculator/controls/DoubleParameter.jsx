import React from 'react';
import s from '../../../assets/scss/components/Parameter.module.scss';

export const DoubleParameter = (props) => {
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
					<div className="row d-flex">
						<div className="col-4 justify-content-center align-self-center">
							<div className="row mb-2">
								<div className="d-flex align-items-center">
									<span className={s.parameter_Name}>{props.names[0]}&nbsp;</span>
								</div>
							</div>
							<div className="row">
								<div className="d-flex align-items-center">
									<div className={s.parameter_Name}>{props.names[1]}&nbsp;</div>
								</div>
							</div>
						</div>
						<div className="col-3 justify-content-center align-self-center">
							<div className="row mb-2">
								<div className="d-flex align-items-center">
									<div className={s.parameter_Value}>{props.values[0]}</div>
								</div>
							</div>
							<div className="row">
								<div className="d-flex align-items-center">
									<div className={s.parameter_Value}>{props.values[1]}</div>
								</div>
							</div>
						</div>
						<div className="col-2 justify-content-center align-self-center text-center">
							<div className={s.parameter_Bracket}>}</div>
						</div>
						<div className="col-3 justify-content-center align-self-center">
								<div className="d-flex justify-content-center">
									<div className={s.parameter_Value}>{props.values[2]}</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};