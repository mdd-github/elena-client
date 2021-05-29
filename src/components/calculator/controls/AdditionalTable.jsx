import React from 'react';

export const AdditionalTable = (props) => {
	const weekdays = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
	];

	return (
		<div className="row">
			<div className="col-12 mt-3">
				<table className="table">
					<tbody>
					<tr>
						<th scope="row">День недели</th>
						<td>{weekdays[props.weekday]}</td>
					</tr>
					<tr>
						<th scope="row">Возраст</th>
						<td>{props.age}</td>
					</tr>
					<tr>
						<th scope="row">Троичный код мужского рода</th>
						<td>{props.values[0]}, {props.values[1]}, {props.values[2]}</td>
					</tr>
					<tr>
						<th scope="row">Троичный код женского рода</th>
						<td>{props.values[3]}, {props.values[4]}, {props.values[5]}</td>
					</tr>
					<tr>
						<th scope="row">Сила рода</th>
						<td>{props.values[6]}</td>
					</tr>
					<tr>
						<th scope="row">Код внутренней силы</th>
						<td>{props.values[7]}, {props.values[8]}, {props.values[9]}</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};