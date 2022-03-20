import React from 'react';
import s from "./../../assets/scss/components/Home.module.scss";
import {Link} from "react-router-dom";

export const EmailConfirmed = () => {
    return (
        <div className={s.home}>
            <div className={s.home_Inner + '  ps-3 pe-3'}>
				<span className={s.home_Orange}>
					Numero процессор
				</span>
                <h1 className={s.home_Title}>
                    Ваш аккаунт подтверждён
                </h1>
                <span className={s.home_Description}>
					Спасибо за использование нашего приложения
				</span>
                <div className={s.home_Buttons}>
                    <Link to="/" className={s.home_ButtonOrange}>На главную</Link>
                </div>
            </div>
        </div>
    );
};
