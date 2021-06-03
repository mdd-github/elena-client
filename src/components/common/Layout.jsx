import React from 'react';
import { Header } from './Header';
import {Footer} from './Footer';

export const Layout = ({children, printRef}) => {
	return (
		<>
			<Header printRef={printRef}/>
			{children}
			<Footer/>
		</>
	);
};