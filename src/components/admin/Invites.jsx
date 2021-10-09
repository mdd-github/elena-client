import React, {useEffect, useState} from 'react';
import {NavBreadcrumbs} from './controls/NavBreadcrumbs';
import s1 from '../../assets/scss/components/Navigator.module.scss';
import s2 from '../../assets/scss/components/Invites.module.scss';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {invitesCreate, invitesCreateNew, invitesGetAll, invitesRemove} from '../../store/invites/actions';

const s = {...s1, ...s2};

export const Invites = () => {
    const invites = useSelector(state => state.invites);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(invitesGetAll());
    }, [dispatch]);

    const [showCreateDialog, setShowCreateDialog] = useState(false);

    const [value] = useState(new Date());
    const [code, setCode] = useState('');
    const [year, setYear] = useState(value.getFullYear());
    const [month, setMonth] = useState(value.getMonth());
    const [date, setDate] = useState(value.getDate());
    const [limit, setLimit] = useState(7);
    const [isMultiple, setIsMultiple] = useState(1);

    const changeCode = (e) => {
        setCode(e.target.value);
    };

    const changeDate = (e) => {
        setDate(e.target.value);
    };

    const changeMonth = (e) => {
        setMonth(e.target.value);
    };

    const changeYear = (e) => {
        setYear(e.target.value);
    };

    const changeLimit = (e) => {
        setLimit(e.target.value);
    };


    const changeIsMultiple = (e) => {
        setIsMultiple(e.target.value);

        console.log(e.target.value);
    };

    const createInvite = () => {
        let newValue = new Date(year, month, date);
        newValue.setFullYear(year, month, date);
        if(newValue.getMonth() !== +month) {
            setDate(1);
            newValue.setFullYear(year, month, 1);
        }

        dispatch(invitesCreateNew(code, newValue, limit, isMultiple));
        setShowCreateDialog(false);
    };

    return (
        <>
            <div className={s.invites_Outer + (showCreateDialog ? ' ' : ' d-none')}>
                <div className={s.invites_Inner}>
                    <div className={s.invites_InnerHeader}>
                        <h3>Создать код приглашения</h3>
                        <button onClick={()=>setShowCreateDialog(false)}>&#10006;</button>
                    </div>
                    <div className={s.invites_InnerBody}>
                        <div className="row">
                            <div className="col-12">
                                <h4>Код:</h4>
                            </div>
                            <div className="col-12 mt-1">
                                <input type="text" className="form-control form-select-sm"
                                       value={code} onChange={changeCode}/>
                            </div>

                            <div className="col-12 mt-3">
                                <h4>Действителен до:</h4>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <input type="text" className="form-control form-select-sm"
                                               value={date} onChange={changeDate}
                                        />
                                    </div>
                                    <div className="col-6 mt-1 p-0">
                                        <select className="form-select form-select-sm"
                                                value={month} onChange={changeMonth}>
                                            <option value="0">Январь</option>
                                            <option value="1">Февраль</option>
                                            <option value="2">Март</option>
                                            <option value="3">Апрель</option>
                                            <option value="4">Май</option>
                                            <option value="5">Июнь</option>
                                            <option value="6">Июль</option>
                                            <option value="7">Август</option>
                                            <option value="8">Сентябрь</option>
                                            <option value="9">Октябрь</option>
                                            <option value="10">Ноябрь</option>
                                            <option value="11">Декабрь</option>
                                        </select>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <input type="text" className="form-control form-select-sm"
                                               value={year} onChange={changeYear}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 mt-3">
                                <h4>Даёт доступ на: </h4>
                            </div>
                            <div className="col-6 mt-3">
                                <h4>Многоразовый:</h4>
                            </div>
                            <div className="col-6 mt-1">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="text" className="form-control form-select-sm"
                                               value={limit} onChange={changeLimit}
                                        />
                                    </div>
                                    <div className="col-6 p-0">
                                        <span>Дней</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <small>("-1" для бессрочного доступа)</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 mt-1 mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                           value="1" id="yes" onChange={changeIsMultiple}
                                           checked={isMultiple === '1'}/>
                                        <label className="form-check-label" htmlFor="yes">
                                            Да
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                           value="0" id="no" onChange={changeIsMultiple}
                                           checked={isMultiple === '0'}/>
                                        <label className="form-check-label" htmlFor="no">
                                            Нет
                                        </label>
                                </div>
                            </div>
                            <hr/>
                            <div className="col-12 mt-1">
                                <button className="btn btn-success float-end"
                                onClick={createInvite}>
                                    Создать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container min-vh-100">
                <div className="row">
                    <div className="col-10 mt-3 mb-3">
                        <NavBreadcrumbs/>
                    </div>
                    <div className="col-2 mt-3 mb-3 text-end">
                        <Link to="#" onClick={() => setShowCreateDialog(true)}
                              className="btn btn-success btn-sm">
                            Сгенерировать
                        </Link>
                    </div>
                </div>

                <div className="row text-danger text-end m-0 p-0">
                    <span className={'pb-3 ' + (invites.error !== 1 && 'd-none')}>
                        {invites.error === 1&&'Неверная дата'}
                    </span>
                    <span className={'pb-3 ' + (invites.error !== 0 && 'd-none')}>
                        {invites.error === 0&&'Данный код уже существует'}
                    </span>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive-md">
                            <table className="table table-sm table-bordered border-dark text-center">
                                <thead>
                                <tr className={s.table_Header}>
                                    <th scope="col">ID</th>
                                    <th scope="col">Код</th>
                                    <th scope="col">Действителен до</th>
                                    <th scope="col">Многоразовый</th>
                                    <th scope="col">Доступ на</th>
                                    <th scope="col">Действия</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    invites?.all?.map(invite => {
                                        const date = new Date(invite.expiresAt);
                                        return (
                                            <tr className={`${s.row}`} key={invite.id}>
                                                <td>{invite.id}</td>
                                                <td>{invite.value}</td>
                                                <td>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</td>
                                                <td>{invite.isGroup ? 'Да' : 'нет'}</td>
                                                <td>{invite.limit > 0 ? invite.limit + ' дней' : 'Бессрочно'}</td>
                                                <td>
                                                    <Link to="#"
                                                          onClick={() => dispatch(invitesRemove(invite.value))}>Удалить</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
