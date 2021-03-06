import React from 'react';
import s from '../assets/scss/components/Home.module.scss'
import {Link} from 'react-router-dom';

export const ExpiredPage = () => {
    return (
        <div className={s.home}>
            <div className={s.home_Inner + '  ps-3 pe-3'}>
				<span className={s.home_Orange}>
					Numero процессор
				</span>
                <h1 className={s.home_Title}>
                    Пробный период истёк
                </h1>
                <span className={s.home_Description}>
					Срок действия вашего аккаунта истёк. Вы можете продлить его, введя промокод:
				</span>
                <div className={s.home_Buttons}>
                    <Link to="/expired/enter-code" className={s.home_ButtonOrange}>Ввести промокод</Link>
                </div>
            </div>
        </div>
    );
};
