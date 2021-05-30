import React from 'react';

export const AdditionalTable = (props) => {
	return (
		<div className="row">
			<div className="col-12 mt-3">
				<table className="table">
					<tbody>
					<tr>
						<th scope="row">День недели</th>
						<td>{props.values[0]}</td>
					</tr>
					<tr>
						<th scope="row">Возраст</th>
						<td>{props.values[1]}</td>
					</tr>
					<tr>
						<th scope="row">Троичный код мужского рода</th>
						<td>{props.values[2]}, {props.values[3]}, {props.values[4]}</td>
					</tr>
					<tr>
						<th scope="row">Троичный код женского рода</th>
						<td>{props.values[5]}, {props.values[6]}, {props.values[7]}</td>
					</tr>
					<tr>
						<th scope="row">Сила рода</th>
						<td>{props.values[8]}</td>
					</tr>
					<tr>
						<th scope="row">Код внутренней силы</th>
						<td>{props.values[9]}, {props.values[10]}, {props.values[11]}</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};