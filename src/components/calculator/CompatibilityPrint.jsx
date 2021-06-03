import React from 'react';
import {PersonalMatrix} from './controls/PersonalMatrix';
import {AdditionalTable} from './controls/AdditionalTable';
import {Navigator} from './controls/Navigator';
import {DoubleParameter} from './controls/DoubleParameter';
import {SingleParameter} from './controls/SingleParameter';
import {useSelector} from 'react-redux';
import '../../assets/scss/components/print.scss';
import {CompatibilityMatrix} from './controls/CompatibilityMatrix';


export const CompatibilityPrint = ({name1, name2, printRef}) => {
	const state = useSelector(state => state.compatibility);

	return (
		<div className="print" ref={printRef}>
			<div className="print-root print-page-next">
				<div className="print-matrix">
					<PersonalMatrix values={state.matrixValues1}/>
				</div>
				<div className="print-parameter-1">
					<DoubleParameter title="Целостность" description="Код принятия себя"
													 values={state.integrityValues1} names={['Осознать', 'Создать']}/>
				</div>
				<div className="print-parameter-2">
					<SingleParameter title="Точка духовного зачёта" description="Сектор максимального результата в жизни"
													 value={state.innerPointValue1}/>
				</div>
				<div className="print-parameter-3">
					<DoubleParameter title="Социализация" description="Код реализации и интеграции в социуме"
													 values={state.socializationValues1} names={['Стратегии', 'Видение']}/>
				</div>
				<div className="print-parameter-4">
					<SingleParameter title="Планетарное воздействие" description="Сверхспособность человека. Уникальный способ влиять на массы"
													 value={state.planetaryValues1}/>
				</div>


				<div className="print-tables">
					<h5 className="name">{name1 || 'Дата рождения'} - {state.date1.getDate()}/{state.date1.getMonth() + 1}/{state.date1.getFullYear()}</h5>
					<AdditionalTable values={state.additionalTableValues1}/>
					<Navigator values={state.navigatorValues1}/>
				</div>
			</div>
			<div className="print-root print-page-next">
				<div className="print-matrix">
					<PersonalMatrix values={state.matrixValues2}/>
				</div>
				<div className="print-parameter-1">
					<DoubleParameter title="Целостность" description="Код принятия себя"
													 values={state.integrityValues2} names={['Осознать', 'Создать']}/>
				</div>
				<div className="print-parameter-2">
					<SingleParameter title="Точка духовного зачёта" description="Сектор максимального результата в жизни"
													 value={state.innerPointValue2}/>
				</div>
				<div className="print-parameter-3">
					<DoubleParameter title="Социализация" description="Код реализации и интеграции в социуме"
													 values={state.socializationValues2} names={['Стратегии', 'Видение']}/>
				</div>
				<div className="print-parameter-4">
					<SingleParameter title="Планетарное воздействие" description="Сверхспособность человека. Уникальный способ влиять на массы"
													 value={state.planetaryValues2}/>
				</div>
				<div className="print-tables">
					<h5 className="name">{name2 || 'Дата рождения'} - {state.date2.getDate()}/{state.date2.getMonth() + 1}/{state.date2.getFullYear()}</h5>
					<AdditionalTable values={state.additionalTableValues2}/>
					<Navigator values={state.navigatorValues2}/>
				</div>
			</div>
			<div className="print-root">
				<div className="print-matrix2">
					<CompatibilityMatrix values={state.matrixValues3}/>
				</div>
				<div className="print-parameter2-1">
					<DoubleParameter title="Для чего взаимоотношения" description="Что каждый должен осознать и реализовать в паре"
													 values={state.integrityValues3} names={['Понять', 'Создать']}/>
				</div>
				<div className="print-parameter2-2">
					<DoubleParameter title="Единство" description="На чем держиться целостность пары"
													 values={state.unityValues3} names={['', '']}/>
				</div>
				<div className="print-parameter2-3">
					<DoubleParameter title="Партнёрство" description="Что пара должна создать вместе. Как партнерство помогает реализовываться в социуме."
													 values={state.socializationValues3} names={['Стратегии', 'Видение']}/>
				</div>
				<div className="print-parameter2-4">
					<SingleParameter title="Планетарное воздействие" description="Сверхспособность пары. Уникальный способ влиять на массы"
													 value={state.planetaryValues3}/>
				</div>

			</div>
		</div>
	);
};