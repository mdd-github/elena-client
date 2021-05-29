import React, { useState } from 'react';
import { PersonalMatrix } from './controls/PersonalMatrix';
import { Navigator } from './controls/Navigator';
import { BirthdatePicker } from './controls/BirthdatePicker';
import { AdditionalTable } from './controls/AdditionalTable';

const calculateAge = (date) => {
	const today = new Date();
	let age = today.getFullYear() - date.getFullYear();

	if(today.getMonth() < date.getMonth()){
		return age - 1;
	}

	if(today.getMonth() === date.getMonth() && today.getDate() < date.getDate())
		return age - 1;

	return age;
}

export const Personal = () => {
	const personalValues = [];
	const [birthday, setBirthday] = useState(new Date());
	const [age, setAge] = useState(calculateAge(birthday));

	for(let i =0; i < 86; i++){
		personalValues.push(Math.floor(Math.random() * 25));
	}

	const changeBirthdate = (date) => {
		setBirthday(date);
		setAge(calculateAge(date));
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
					<AdditionalTable weekday={birthday.getDay()}
													age={age}  values={personalValues}/>
				</div>
				<div className="col-12">
					<Navigator values={personalValues}/>
				</div>
			</div>
		</div>
	);
};