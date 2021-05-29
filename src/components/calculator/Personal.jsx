import React from 'react';
import { PersonalMatrix } from './controls/PersonalMatrix';
import { Navigator } from './controls/Navigator';
import { BirthdatePicker } from './controls/BirthdatePicker';

export const Personal = () => {
	const personalValues = [];

	for(let i =0; i < 86; i++){
		personalValues.push(Math.floor(Math.random() * 25));
	}

	const changeBirthdate = (e) => {
		console.log(e);
	}

	return (
		<div className="container">

			<div className="row">
				<div className="col-12">
					<div className="mt-5">
						<h1>Персональный расчёт</h1>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-6">
					<PersonalMatrix values={personalValues}/>
				</div>
				<div className="col-6">
					<BirthdatePicker onChangeValue={changeBirthdate}/>
				</div>
				<div className="col-12">
					<Navigator values={personalValues}/>
				</div>
			</div>

		</div>
	);
};