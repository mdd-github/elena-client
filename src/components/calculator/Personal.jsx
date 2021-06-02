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
		<div className="container-fluid ps-5 pe-5" style={{'maxWidth':'1440px'}}>
			<div className="row mt-5">
				<div className="col-12 col-lg-6">
					<h2 className="mb-3 text-center">Персональный расчёт</h2>
					<PersonalMatrix values={state.matrixValues}/>
				</div>
				<div className="col-12 col-lg-6">
					<BirthdatePicker onChangeValue={changeBirthdate} initialDate={state.date}/>
					<AdditionalTable values={state.additionalTableValues}/>
					<Navigator values={state.navigatorValues}/>
				</div>
				<div className="col-12">
					<div className="row mt-1 mt-md-3 mb-5">
						<div className="col-12 col-sm-6 col-lg-3 p-0 pe-sm-2 pe-lg-1 my-2">
							<DoubleParameter title="Целостность" description="Код принятия себя"
															 values={state.integrityValues} names={['Осознать', 'Создать']}/>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 p-0 ps-sm-2 ps-lg-1 pe-lg-1 my-2">
							<SingleParameter title="Точка духовного зачёта" description="Сектор максимального результата в жизни"
															 value={state.innerPointValue}/>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 p-0 pe-sm-2 ps-lg-1 pe-lg-1 my-2">
							<DoubleParameter title="Социализация" description="Код реализации и интеграции в социуме"
															 values={state.socializationValues} names={['Стратегии', 'Видение']}/>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 p-0 ps-sm-2 ps-lg-1 my-2">
							<SingleParameter title="Планетарное воздействие" description="Сверхспособность человека. Уникальный способ влиять на массы"
															 value={state.planetaryValues}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};