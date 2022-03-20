import React, {useState} from 'react';
import s from "../../assets/scss/components/Home.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {usersSendConfirmation} from "../../store/users/actions";

export const SendEmailConfirm = () => {
    const isSent = useSelector(state => state.users.confirmationSent);
    const dispatch = useDispatch();

    const sendEmail = (e) => {
        e.preventDefault();
        dispatch(usersSendConfirmation());
    }

    if (!isSent) {
        return (
            <div className={s.home}>
                <div className={s.home_Inner + '  ps-3 pe-3'}>
				<span className={s.home_Orange}>
					Numero процессор
				</span>
                    <h1 className={s.home_Title}>
                        Ваш e-mail не подтверждён
                    </h1>
                    <span className={s.home_Description}>
                        Нажмите на кнопку ниже, чтобы получить ссылку на подтверждение вашего аккаунта
                    </span>
                    <div className={s.home_Buttons}>
                        <a href="#" onClick={sendEmail} className={s.home_ButtonOrange}>Подтвердить</a>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={s.home}>
                <div className={s.home_Inner + '  ps-3 pe-3'}>
				<span className={s.home_Orange}>
					Numero процессор
				</span>
                    <h1 className={s.home_Title}>
                        Письмо отправлено
                    </h1>
                    <span className={s.home_Description}>
                        Мы выслали вам письмо со ссылкой для подтверждения аккаунта
                    </span>
                </div>
            </div>
        );
    }
};