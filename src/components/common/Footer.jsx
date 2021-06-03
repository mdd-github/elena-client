import React from 'react';
import s from '../../assets/scss/components/Footer.module.scss';
import instagramSvg from '../../assets/images/instagram.svg';
import youtubeSvg from '../../assets/images/youtube.svg';
import facebookSvg from '../../assets/images/facebook.svg';

export const Footer = () => {
	return (
		<div className={s.footer}>
			<div className="container py-5">
				<div className="row align-items-center d-flex">
				<div className="col-12 col-md-4 text-center text-md-start">
					<ul>
						<li>
							<a href="mailto:crm@titovasvetlana.ru">crm@titovasvetlana.ru</a>
						</li>
						<li>
							<a href="https://api.whatsapp.com/send?phone=79672787632">+7-967-278-76-32 (Whatsapp)</a>
						</li>
					</ul>
				</div>
				<div className="col-12 col-md-4 text-center mt-3 mt-md-0">
					<span>© 2021 ИП Титова М.Н.</span>
				</div>
				<div className="col-12 col-md-4 justify-content-center d-flex mt-3 mt-md-0">
					<ul className="d-flex">
						<li>
							<a href="https://www.instagram.com/svetlanatitova_vybor/">
								<img src={instagramSvg} alt="instagram" width="32" height="32"/>
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/sveta.titova.376">
								<img src={facebookSvg} alt="facebook" width="32" height="32"/>
							</a>
						</li>
						<li>
							<a href="https://www.youtube.com/channel/UC8qCQvUsFN-tdXpihwDijCg">
								<img src={youtubeSvg} alt="youtube" width="32" height="32"/>
							</a>
						</li>
					</ul>
				</div>
				</div>
			</div>
		</div>
	);
};