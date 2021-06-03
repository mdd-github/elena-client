import React, { useState } from 'react';

export const BirthdatePicker = ({onChangeValue, initialDate, name, setName}) => {
	const [value, setValue] = useState(initialDate);
	const [year, setYear] = useState(value.getFullYear());
	const [month, setMonth] = useState(value.getMonth());
	const [date, setDate] = useState(value.getDate());

	const changeName = (e) => {
		setName(e.target.value);
	};

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
		onChangeValue(newValue);
	};

	return (
		<div className="row mt-md-3 mt-lg-0">
			<div className="col-12 col-md-5 p-0 my-3 my-md-0 ">
				<input type="text" className="form-control form-select-sm" value={name}
							 onChange={changeName} placeholder="Имя"/>
			</div>
			<div className="col-3 col-md-2 pe-0 ps-0 ps-md-3">
				<input type="text" className="form-control form-select-sm" value={date}
							 onChange={changeDate} onBlur={changeValue}/>
			</div>
			<div className="col-6 col-md-3">
				<select className="form-select form-select-sm" value={month}
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
			<div className="col-3 col-md-2 col-2 p-0">
				<input type="text" className="form-control form-select-sm" value={year}
							 onChange={changeYear} onBlur={changeValue}/>
			</div>
		</div>
	);
};