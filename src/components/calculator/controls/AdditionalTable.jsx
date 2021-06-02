import React from 'react';
import s from '../../../assets/scss/components/Navigator.module.scss';


export const AdditionalTable = (props) => {
	return (
		<div className="row mt-3 mb-3">
				<table className="table table-sm table-bordered border-dark">
					<tbody>
					<tr className={`${s.row}`}>
						<td>День недели</td>
						<td>{props.values[0]}</td>
					</tr>
					<tr className={`${s.row}`}>
						<td>Возраст</td>
						<td>{props.values[1]}</td>
					</tr>
					<tr className={`${s.row}`}>
						<td>Троичный код мужского рода</td>
						<td>{props.values[2]}, {props.values[3]}, {props.values[4]}</td>
					</tr>
					<tr className={`${s.row}`}>
						<td>Троичный код женского рода</td>
						<td>{props.values[5]}, {props.values[6]}, {props.values[7]}</td>
					</tr>
					<tr className={`${s.row}`}>
						<td>Сила рода</td>
						<td>{props.values[8]}</td>
					</tr>
					<tr className={`${s.row}`}>
						<td>Код внутренней силы</td>
						<td>{props.values[9]}, {props.values[10]}, {props.values[11]}</td>
					</tr>
					</tbody>
				</table>
		</div>
	);
};