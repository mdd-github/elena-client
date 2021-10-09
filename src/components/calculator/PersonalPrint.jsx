import React from 'react';
import {PersonalMatrix} from './controls/PersonalMatrix';
import {AdditionalTable} from './controls/AdditionalTable';
import {Navigator} from './controls/Navigator';
import {DoubleParameter} from './controls/DoubleParameter';
import {SingleParameter} from './controls/SingleParameter';
import {useSelector} from 'react-redux';
import '../../assets/scss/components/print.scss';
import {BehaviourRange} from "./controls/BehaviourRange";


export const PersonalPrint = ({name, printRef}) => {
    const state = useSelector(state => state.personal);

    return (
        <div className="print print-root" ref={printRef}>
            <div className="print-page-next">
                <div className="print-matrix">
                    <PersonalMatrix values={state.matrixValues}/>
                </div>
                <div className="print-parameter-1">
                    <DoubleParameter title="Целостность" description="Код принятия себя"
                                     values={state.integrityValues} names={['Осознать', 'Создать']}/>
                </div>
                <div className="print-parameter-2">
                    <SingleParameter title="Точка духовного зачёта"
                                     description="Сектор максимального результата в жизни"
                                     value={state.innerPointValue}/>
                </div>
                <div className="print-parameter-3">
                    <DoubleParameter title="Социализация" description="Код реализации и интеграции в социуме"
                                     values={state.socializationValues} names={['Стратегии', 'Видение']}/>
                </div>
                <div className="print-parameter-4">
                    <SingleParameter title="Планетарное воздействие"
                                     description="Сверхспособность человека. Уникальный способ влиять на массы"
                                     value={state.planetaryValues}/>
                </div>


                <div className="print-tables">
                    <h5 className="name">{name || 'Дата рождения'} - {state.date.getDate()}/{state.date.getMonth() + 1}/{state.date.getFullYear()}</h5>
                    <AdditionalTable values={state.additionalTableValues}/>
                    <Navigator values={state.navigatorValues}/>
                </div>
            </div>

            <div className="print-page">
                <div className="print-behaviour">
                    <BehaviourRange range={state.behaviourRange}/>
                </div>

                <div className="print-row-t">
                    <h5 className="mb-0">Активации личности и потенциала</h5>
                </div>
                <div className="print-row">
                <div className="print-parameter-1__1">
                    <DoubleParameter title="1 Активация"
                                     values={state.personalityValues[0]}
                                     names={['Что', 'Где']}/>
                </div>
                <div className="print-parameter-1__1">
                    <DoubleParameter title="2 Активация"
                                     values={state.personalityValues[1]}
                                     names={['Что', 'Где']}/>
                </div>
                <div className="print-parameter-1__1">
                    <DoubleParameter title="3 Активация"
                                     values={state.personalityValues[2]}
                                     names={['Что', 'Где']}/>
                </div>
                <div className="print-parameter-1__1">
                    <DoubleParameter title="4 Активация"
                                     values={state.personalityValues[3]}
                                     names={['Что', 'Где']}/>
                </div>
                </div>
            </div>
        </div>
    );
};
