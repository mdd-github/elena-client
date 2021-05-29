import React, { useEffect, useState } from 'react';

export const BirthdatePicker = ({onChangeValue}) => {
	const [value, setValue] = useState(new Date());
	const [year, setYear] = useState(value.getFullYear());
	const [month, setMonth] = useState(value.getMonth());
	const [date, setDate] = useState(value.getDate());

	const changeDate = (e) => {
		setDate(e.target.value);
	};

	const changeMonth = (e) => {
		setMonth(e.target.value);
	};

	const changeYear = (e) => {
		setYear(e.target.value);
	};

	const changeValue = () => {
		let newValue = new Date(year, month, date);
		if(newValue.getMonth() !== +month) {
			setDate(1);
			newValue = new Date(year, month, 1);
		}
		setValue(newValue);
	};

	useEffect(() => onChangeValue(value), [onChangeValue, value]);

	return (
		<div className="row">
			<div className="col-12 mt-3">
				<h5>Дата рождения:</h5>
			</div>
			<div className="col-4">
				<input type="text" className="form-control" value={date}
							 onChange={changeDate} onBlur={changeValue}/>
			</div>
			<div className="col-4">
				<select className="form-select" value={month}
								onChange={changeMonth} onBlur={changeValue}>
					<option value="0">Январь</option>
					<option value="1">Февраль</option>
					<option value="2">Март</option>
					<option value="3">Апрель</option>
					<option value="4">Май</option>
					<option value="5">Июнь</option>
					<option value="6">Июль</option>
					<option value="7">Август</option>
					<option value="8">Сентябрь</option>
					<option value="9">Октябрь</option>
					<option value="10">Ноябрь</option>
					<option value="11">Декабрь</option>
				</select>
			</div>
			<div className="col-4">
				<input type="text" className="form-control" value={year}
							 onChange={changeYear} onBlur={changeValue}/>
			</div>
		</div>
	);
};