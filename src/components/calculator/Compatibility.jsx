import { PersonalMatrix } from './controls/PersonalMatrix';
import { BirthdatePicker } from './controls/BirthdatePicker';
import { AdditionalTable } from './controls/AdditionalTable';
import { Navigator } from './controls/Navigator';
import { DoubleParameter } from './controls/DoubleParameter';
import { SingleParameter } from './controls/SingleParameter';
import { useDispatch, useSelector } from 'react-redux';
import { compatibilitySetDate1, compatibilitySetDate2, compatibilityUpdate } from '../../store/compatibility/actions';
import { useEffect } from 'react';
import { CompatibilityMatrix } from './controls/CompatibilityMatrix';

export const Compatibility = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.compatibility);

	const changeBirthdate1 = (date) => {
		dispatch(compatibilitySetDate1(date));
		dispatch(compatibilityUpdate(date, state.date2));
	};

	const changeBirthdate2 = (date) => {
		dispatch(compatibilitySetDate2(date));
		dispatch(compatibilityUpdate(state.date1, date));
	};

	useEffect(()=>{
		dispatch(compatibilitySetDate1(new Date()));
		dispatch(compatibilitySetDate2(new Date()));
		dispatch(compatibilityUpdate(new Date(), new Date()));
	}, [dispatch]);

	return (
		<div className="container">

			<div className="row">
				<div className="col-12">
					<div className="mt-5 text-center">
						<h1>Расчёт совместимости</h1>
					</div>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-6">
					<PersonalMatrix values={state.matrixValues1}/>
				</div>
				<div className="col-6">
					<BirthdatePicker onChangeValue={changeBirthdate1} initialDate={state.date1}/>
					<AdditionalTable values={state.additionalTableValues1}/>
				</div>
				<div className="col-12">
					<Navigator values={state.navigatorValues1}/>
					<div className="row mt-3 mb-5">
						<div className="col-3">
							<DoubleParameter title="Целостность" description="Код принятия себя"
															 values={state.integrityValues1} names={['Осознать', 'Создать']}/>
						</div>
						<div className="col-3">
							<DoubleParameter title="Социализация" description="Код реализации и интеграции в социуме"
															 values={state.socializationValues1} names={['Стратегии', 'Видение']}/>
						</div>
						<div className="col-3">
							<SingleParameter title="Точка духовного зачёта" description="Сектор максимального результата в жизни"
															 value={state.innerPointValue1}/>
						</div>
						<div className="col-3">
							<SingleParameter title="Планетарное воздействие" description="Сверхспособность человека. Уникальный способ влиять на массы"
															 value={state.planetaryValues1}/>
						</div>
					</div>
				</div>
			</div>
			<hr/>
			<div className="row mt-5">
				<div className="col-6">
					<PersonalMatrix values={state.matrixValues2}/>
				</div>
				<div className="col-6">
					<BirthdatePicker onChangeValue={changeBirthdate2} initialDate={state.date2}/>
					<AdditionalTable values={state.additionalTableValues2}/>
				</div>
				<div className="col-12">
					<Navigator values={state.navigatorValues2}/>
					<div className="row mt-3 mb-5">
						<div className="col-3">
							<DoubleParameter title="Целостность" description="Код принятия себя"
															 values={state.integrityValues2} names={['Осознать', 'Создать']}/>
						</div>
						<div className="col-3">
							<DoubleParameter title="Социализация" description="Код реализации и интеграции в социуме"
															 values={state.socializationValues2} names={['Стратегии', 'Видение']}/>
						</div>
						<div className="col-3">
							<SingleParameter title="Точка духовного зачёта" description="Сектор максимального результата в жизни"
															 value={state.innerPointValue2}/>
						</div>
						<div className="col-3">
							<SingleParameter title="Планетарное воздействие" description="Сверхспособность человека. Уникальный способ влиять на массы"
															 value={state.planetaryValues2}/>
						</div>
					</div>
				</div>
			</div>
			<hr/>
			<div className="row mt-5">
				<div className="col-6">
					<div className="row">
						<div className="col-6">
							<DoubleParameter title="Для чего взаимоотношения" description="Что каждый должен осознать и реализовать в паре"
															 values={state.integrityValues3} names={['Понять', 'Создать']}/>
						</div>
						<div className="col-6">
							<DoubleParameter title="Единство" description="На чем держиться целостность пары"
															 values={state.unityValues3} names={['', '']}/>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-6">
							<DoubleParameter title="Партнёрство" description="Что пара должна создать вместе. Как партнерство помогает реализовываться в социуме."
															 values={state.socializationValues3} names={['Стратегии', 'Видение']}/>
						</div>
						<div className="col-6">
							<SingleParameter title="Планетарное воздействие" description="Сверхспособность пары. Уникальный способ влиять на массы"
															 value={state.planetaryValues3}/>
						</div>
					</div>
				</div>
				<div className="col-6 mb-5">
					<CompatibilityMatrix values={state.matrixValues3}/>
				</div>
			</div>
		</div>
	);
};