import { PersonalMatrix } from './controls/PersonalMatrix';
import { Navigator } from './controls/Navigator';
import { BirthdatePicker } from './controls/BirthdatePicker';
import { AdditionalTable } from './controls/AdditionalTable';
import { SingleParameter } from './controls/SingleParameter';
import { DoubleParameter } from './controls/DoubleParameter';
import { useDispatch, useSelector } from 'react-redux';
import { personalSetDate } from '../../store/personal/actions';
import { useEffect } from 'react';

export const Personal = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.personal);

	const changeBirthdate = (date) => {
		dispatch(personalSetDate(date));
	};

	useEffect(()=>{
		dispatch(personalSetDate(new Date()));
	}, [dispatch]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="mt-5 text-center">
						<h1>Персональный расчёт</h1>
					</div>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-6">
					<PersonalMatrix values={state.matrixValues}/>
				</div>
				<div className="col-6">
					<BirthdatePicker onChangeValue={changeBirthdate} initialDate={state.date}/>
					<AdditionalTable values={state.additionalTableValues}/>
				</div>
				<div className="col-12">
					<Navigator values={state.navigatorValues}/>
					<div className="row mt-3 mb-5">
						<div className="col-3">
							<DoubleParameter title="Целостность" description="Код принятия себя"
															 values={state.integrityValues} names={['Осознать', 'Создать']}/>
						</div>
						<div className="col-3">
							<DoubleParameter title="Социализация" description="Код реализации и интеграции в социуме"
															 values={state.socializationValues} names={['Стратегии', 'Видение']}/>
						</div>
						<div className="col-3">
							<SingleParameter title="Точка духовного зачёта" description="Сектор максимального результата в жизни"
															 value={state.innerPointValue}/>
						</div>
						<div className="col-3">
							<SingleParameter title="Планетарное воздействие" description="Сверхспособность человека. Уникальный способ влиять на массы"
															 value={state.planetaryValues}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};