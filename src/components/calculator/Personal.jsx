import React, { useEffect, useState } from 'react';
import { PersonalMatrix } from './controls/PersonalMatrix';
import { Navigator } from './controls/Navigator';
import { BirthdatePicker } from './controls/BirthdatePicker';
import { AdditionalTable } from './controls/AdditionalTable';
import { SingleParameter } from './controls/SingleParameter';
import { DoubleParameter } from './controls/DoubleParameter';
import { useDispatch, useSelector } from 'react-redux';
import { personalSetDate } from '../../store/personal/actions';

export const Personal = () => {
	const dispatch = useDispatch();
	const personalValues = useSelector(state => state.personal.matrixValues);
	const additionalTableValues = useSelector(state => state.personal.additionalTableValues);
	const navigatorValues = useSelector(state => state.personal.navigatorValues);
	const integrityValues = useSelector(state => state.personal.integrityValues);
	const socializationValues = useSelector(state => state.personal.socializationValues);
	const innerPointValue = useSelector(state => state.personal.innerPointValue);
	const planetaryValues = useSelector(state => state.personal.planetaryValues);

	const [birthday, setBirthday] = useState(new Date());
	const changeBirthdate = (date) => {
		setBirthday(date);
	};

	useEffect(() => {
		dispatch(personalSetDate(birthday));
	}, [birthday, dispatch]);


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
					<PersonalMatrix values={personalValues}/>
				</div>
				<div className="col-6">
					<BirthdatePicker onChangeValue={changeBirthdate}/>
					<AdditionalTable values={additionalTableValues}/>
				</div>
				<div className="col-12">
					<Navigator values={navigatorValues}/>
					<div className="row mt-3 mb-5">
						<div className="col-3">
							<DoubleParameter title="Целостность" description="Код принятия себя"
															 values={integrityValues} names={['Осознать', 'Создать']}/>
						</div>
						<div className="col-3">
							<DoubleParameter title="Социализация" description="Код реализации и интеграции в социуме"
															 values={socializationValues} names={['Стратегии', 'Видение']}/>
						</div>
						<div className="col-3">
							<SingleParameter title="Точка духовного зачёта" description="Сектор максимального результата в жизни"
															 value={innerPointValue}/>
						</div>
						<div className="col-3">
							<SingleParameter title="Планетарное воздействие" description="Сверхспособность человека. Уникальный способ влиять на массы"
															 value={planetaryValues}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};