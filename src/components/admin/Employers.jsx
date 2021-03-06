import React, {useEffect, useMemo, useState} from 'react';
import {NavBreadcrumbs} from './controls/NavBreadcrumbs';
import s from '../../assets/scss/components/Navigator.module.scss';
import s2 from '../../assets/scss/components/Invites.module.scss';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
    usersBan,
    usersChangeExpirationDate,
    usersGetAll,
    usersImport,
    usersRemove,
    usersSetRole,
    usersUnban,
} from '../../store/users/actions';
import {CSVLink} from "react-csv";


export const Employers = () => {
    const users = useSelector(state => state.users);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [showChangeDialog, setShowChangeDialog] = useState(false);

    const [value] = useState(new Date());
    const [year, setYear] = useState(value.getFullYear());
    const [month, setMonth] = useState(value.getMonth());
    const [date, setDate] = useState(value.getDate());
    const [user, setUser] = useState(null);

    const showDialog = (user) => {
        setUser(user);
        setYear(new Date(user.trialExpiredAt).getFullYear());
        setMonth(new Date(user.trialExpiredAt).getMonth());
        setDate(new Date(user.trialExpiredAt).getDate());
        setShowChangeDialog(true);
    }

    const changeDate = (e) => {
        setDate(e.target.value);
    };

    const changeMonth = (e) => {
        setMonth(e.target.value);
    };

    const changeYear = (e) => {
        setYear(e.target.value);
    };

    useEffect(() => {
        dispatch(usersGetAll());
    }, [dispatch]);

    const remove = (id) => {
        dispatch(usersRemove(id));
    };

    const ban = (id) => {
        dispatch(usersBan(id));
    };

    const unban = (id) => {
        dispatch(usersUnban(id));
    };

    const changeRole = (id, role) => {
        dispatch(usersSetRole(id, role));
    };

    const [isLoading, setIsLoading] = useState(false);

    const csvSelected = async (e) => {
        if (e.target.files[0]) {
            setIsLoading(true);
            dispatch(usersImport(e.target.files[0]));

            setTimeout(() => {
                dispatch(usersGetAll());
                setIsLoading(false);
            }, 5000);
        }
    };

    const updateExpirationDate = () => {
        let newValue = new Date(year, month, date);
        newValue.setFullYear(year, month, date);
        if (newValue.getMonth() !== +month) {
            setDate(1);
            newValue.setFullYear(year, month, 1);
        }

        dispatch(usersChangeExpirationDate(user.id, newValue));
        setShowChangeDialog(false);

        setTimeout(() => {
            dispatch(usersGetAll());
        }, 1000);
    }


    const [pagination, setPagination] = useState({
        count: 1,
        current: 0,
    });

    const setCurrentPage = (n) => {
        setPagination({
            ...pagination,
            current: n
        })
    }

    const pagedUsers = useMemo(() => {
        const pages = [];

        const USERS_ON_PAGE = 15;

        users?.all.forEach((user, index) => {
            const pageIndex = Math.floor(index / USERS_ON_PAGE);
            const userIndexOnPage = index % USERS_ON_PAGE;
            if (userIndexOnPage === 0) {
                pages.push([]);
            }

            pages[pageIndex].push(user);
        });

        setPagination({
            ...pagination,
            count: pages.length
        })

        return pages || [[]];
    }, [users, users?.all]);

    const csvData = useMemo(() => {
        const data = [];



        return users?.all || [
            ["firstname", "lastname", "email"],
            ["Ahmed", "Tomi", "ah@smthing.co.com"],
            ["Raed", "Labes", "rl@smthing.co.com"],
            ["Yezzi", "Min l3b", "ymin@cocococo.com"]
        ];
    }, [users?.all])

    return (
        <>
            <div className={s2.invites_Outer + (showChangeDialog ? ' ' : ' d-none')}>
                <div className={s2.invites_Inner}>
                    <div className={s2.invites_InnerHeader}>
                        <h3>???????????????? ?????????????? ????????????</h3>
                        <button onClick={() => setShowChangeDialog(false)}>&#10006;</button>
                    </div>
                    <div className={s2.invites_InnerBody}>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <h4>?????????????? ????:</h4>
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
                                            <option value="0">????????????</option>
                                            <option value="1">??????????????</option>
                                            <option value="2">????????</option>
                                            <option value="3">????????????</option>
                                            <option value="4">??????</option>
                                            <option value="5">????????</option>
                                            <option value="6">????????</option>
                                            <option value="7">????????????</option>
                                            <option value="8">????????????????</option>
                                            <option value="9">??????????????</option>
                                            <option value="10">????????????</option>
                                            <option value="11">??????????????</option>
                                        </select>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <input type="text" className="form-control form-select-sm"
                                               value={year} onChange={changeYear}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-1">
                                <button className="btn btn-success float-end"
                                        onClick={updateExpirationDate}>
                                    ??????????????????
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container min-vh-100">
                <div className="row">
                    <div className="col-8 mt-3 mb-3">
                        <NavBreadcrumbs/>
                    </div>
                    <div className="col-2 mt-3 mb-3 text-end">
                        <input type="file" className="d-none" id="csv" onChange={csvSelected}
                               accept=".csv"/>
                        <label className={'btn btn-sm ' + (isLoading ? 'btn-secondary' : 'btn-success')} htmlFor="csv">
                            ???????????? ???? CSV
                        </label>
                    </div>

                    <div className="col-2 mt-3 mb-3 text-end">
                        <CSVLink data={csvData} filename="users.csv" className="btn btn-sm btn-success">?????????????? ?? CSV</CSVLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="table-responsive-md">
                            <table className="table table-sm table-bordered border-dark text-center">
                                <thead>
                                <tr className={s.table_Header}>
                                    <th scope="col">ID</th>
                                    <th scope="col">?????? ????????????????????????</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">????????</th>
                                    <th scope="col">?????????????? ????????????</th>
                                    <th scope="col">?????????????? ????</th>
                                    <th scope="col">????????????????</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    pagedUsers[pagination.current]?.map(user => (
                                        <tr className={`${s.row}`} key={user.id}>
                                            <td>{user.id}</td>
                                            <td>
                                                {user.firstName} {user.lastName}
                                                {
                                                    auth?.id === user.id && <b>&nbsp;(?????? ????)</b>
                                                }
                                            </td>
                                            <td>{user.email}</td>
                                            <td>
                                                {
                                                    auth?.id !== user.id ?
                                                        <select className="form-select form-select-sm" value={user.role}
                                                                onChange={(e) => changeRole(user.id, e.target.value)}>
                                                            <option value="admin">??????????????????????????</option>
                                                            <option value="employee">??????????????????</option>
                                                        </select> :
                                                        <select className="form-select form-select-sm" value={user.role}
                                                                onChange={(e) => changeRole(user.id, e.target.value)}
                                                                disabled="1">
                                                            <option value="admin">??????????????????????????</option>
                                                            <option value="employee">??????????????????</option>
                                                        </select>
                                                }
                                            </td>
                                            <td>{user.isTrial ? '????' : '??????'}</td>
                                            <td className="d-flex justify-content-center align-items-center"><span>{user.isTrial ?
                                                `${
                                                    new Date(user.trialExpiredAt).getDate()
                                                }/${
                                                    new Date(user.trialExpiredAt).getMonth() + 1
                                                }/${
                                                    new Date(user.trialExpiredAt).getFullYear()
                                                }` : ''
                                            }</span>
                                                {
                                                    user.isTrial &&
                                                    <Link to="#" onClick={() => showDialog(user)}
                                                          className="btn btn-sm btn-secondary"
                                                          style={{marginLeft: '10px'}}>
                                                        ????????????????
                                                    </Link>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    auth?.id !== user.id ?
                                                        <>
                                                            {
                                                                !user.banned &&
                                                                <Link to="#" onClick={() => ban(user.id)}
                                                                      className="btn btn-sm btn-secondary">??????????????????????????</Link>
                                                            }
                                                            {
                                                                user.banned &&
                                                                <Link to="#" onClick={() => unban(user.id)}
                                                                      className="btn btn-sm btn-secondary">????????????????????????????</Link>
                                                            }
                                                            <Link to="#" onClick={() => remove(user.id)}
                                                                  className="btn btn-sm btn-danger m-1">??????????????</Link>
                                                        </> : <>&nbsp;</>
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>

                            <div>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        {
                                            pagination.current != 0 && <li className="page-item">
                                                <a className="page-link" href="#"  onClick={()=>setCurrentPage(0)}>
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                        }

                                        {
                                            pagination.current !== 0 &&
                                            <li className="page-item">
                                                <a className={"page-link"} href="#" onClick={()=>setCurrentPage(pagination.current - 1)}>
                                                    <span aria-hidden="true">{pagination.current}</span>
                                                </a>
                                            </li>
                                        }

                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                <span aria-hidden="true">{pagination.current + 1}</span>
                                            </a>
                                        </li>



                                        {
                                            pagination.current != pagination.count - 1 &&
                                            <li className="page-item">
                                                <a className="page-link" href="#" onClick={()=>setCurrentPage(pagination.current + 1)}>
                                                    <span aria-hidden="true">{pagination.current + 2}</span>
                                                </a>
                                            </li>
                                        }

                                        {
                                            pagination.current != pagination.count - 1 &&
                                            <li className="page-item">
                                                <a className="page-link" href="#" onClick={()=>setCurrentPage(pagination.count - 1)}><span
                                                aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        }

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
