import React from 'react';
import s from '../../../assets/scss/components/Navigator.module.scss';

export const Navigator = (props) => {
	return (
		<>
			<div className="row">
				<div className="col-12 p-0">
					<h5>Навигатор</h5>
				</div>
				<div className="col-12 mt-1 p-0">
					<div className="table-responsive-md">
						<table className="table table-sm table-bordered border-dark text-center">
							<thead>
							<tr className={s.table_Header}>
								<th scope="col">Сектор реальности</th>
								<th scope="col">Материальный план</th>
								<th scope="col">Духовный план</th>
								<th scope="col">Эмоциональный план</th>
							</tr>
							</thead>
							<tbody>
							<tr className={`${s.row} ${s.row_VioletRed}`}>
								<td className="text-start"><b>21.</b> Миссия, цели, призвание, вера</td>
								<td className={s.cell_Value}>{props.values[0]}</td>
								<td className={s.cell_Value}>{props.values[1]}</td>
								<td className={s.cell_Value}>{props.values[2]}</td>
							</tr>
							<tr className={`${s.row} ${s.row_SteelBlue}`}>
								<td className="text-start"><b>18.</b> Отношения к системам, эгрегоры, ценности, установки</td>
								<td className={s.cell_Value}>{props.values[3]}</td>
								<td className={s.cell_Value}>{props.values[4]}</td>
								<td className={s.cell_Value}>{props.values[5]}</td>
							</tr>
							<tr className={`${s.row} ${s.row_DarkTurquoise}`}>
								<td className="text-start"><b>15.</b> Способ самовыражения, как быть проявленным, правда/ложь</td>
								<td className={s.cell_Value}>{props.values[6]}</td>
								<td className={s.cell_Value}>{props.values[7]}</td>
								<td className={s.cell_Value}>{props.values[8]}</td>
							</tr>
							<tr className={`${s.row} ${s.row_SpringGreen}`}>
								<td className="text-start"><b>12.</b> Смысл жизни, картина мира, кто в центре</td>
								<td className={s.cell_Value}>{props.values[9]}</td>
								<td className={s.cell_Value}>{props.values[10]}</td>
								<td className={s.cell_Value}>{props.values[11]}</td>
							</tr>
							<tr className={`${s.row} ${s.row_Yellow}`}>
								<td className="text-start"><b>9.</b> Стиль жизни, роль в системе, границы</td>
								<td className={s.cell_Value}>{props.values[12]}</td>
								<td className={s.cell_Value}>{props.values[13]}</td>
								<td className={s.cell_Value}>{props.values[14]}</td>
							</tr>
							<tr className={`${s.row} ${s.row_Chocolate}`}>
								<td className="text-start"><b>6.</b> Ресурсность, результативность, творчество</td>
								<td className={s.cell_Value}>{props.values[15]}</td>
								<td className={s.cell_Value}>{props.values[16]}</td>
								<td className={s.cell_Value}>{props.values[17]}</td>
							</tr>
							<tr className={`${s.row} ${s.row_Tomato}`}>
								<td className="text-start"><b>3.</b> Самоценность, достаточность, воля</td>
								<td className={s.cell_Value}>{props.values[18]}</td>
								<td className={s.cell_Value}>{props.values[19]}</td>
								<td className={s.cell_Value}>{props.values[20]}</td>
							</tr>
							<tr className={`${s.row} ${s.table_Footer}`}>
								<td className="text-start">Итого</td>
								<td className={s.cell_Value}>{props.values[21]}</td>
								<td className={s.cell_Value}>{props.values[22]}</td>
								<td className={s.cell_Value}>{props.values[23]}</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};