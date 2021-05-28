import React from 'react';
import { PersonalMatrix } from './controls/PersonalMatrix';

export const Personal = () => {
	return (
		<div>
			<h1>Personal</h1>

			<div className="row">
				<div className="col-5">
					<PersonalMatrix/>
				</div>
			</div>

		</div>
	);
};