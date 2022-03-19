import React, {useEffect, useState} from 'react';
import {USERS_APPLY_INVITE_START, usersApplyInvite} from "../../store/users/actions";
import {useDispatch, useSelector} from "react-redux";

export const ExpiredEnterCode = () => {
    const dispatch = useDispatch();
    const inviteError = useSelector((state) => state.users.inviteError);

    const [formData, setFormData] = useState({
        invite: '',
        error: '',
    });

    useEffect(() => {
        dispatch({type: USERS_APPLY_INVITE_START});
    }, [dispatch])

    useEffect(() => {
        setFormData({
            ...formData,
            error: inviteError ? 'Неверный промокод' : '',
        });
    }, [inviteError]);

    const onChange = (event) => {
        setFormData({
            error: '',
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if(formData.invite.trim() !== '') {
            dispatch(usersApplyInvite(formData.invite));
        } else {
            setFormData({
                ...formData,
                error: 'Введите промокод',
            });
        }
    }

    return (
        <div className="container min-vh-100">
            <div className="row">
                <div className="col-12 mt-5 text-center">
                    <h5>Ввести промокод</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <form onSubmit={onSubmit}>
                        <div className="form-group mt-3">
                            <small className="mb-2 text-danger">{formData.error}</small>
                            <input type="text" className="form-control" name="invite"
                                   value={formData.invite} onChange={onChange} placeholder="Введите промокод"/>
                        </div>
                        <div className="form-group mt-3">

                            <input type="submit" className="form-control btn btn-primary text-light"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};