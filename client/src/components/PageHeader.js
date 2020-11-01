import React from 'react';

import './PageHeader.scss';
import { ReactComponent as LogoImage } from '../common/images/logo.svg';

export default function PageHeader() {
	return (
		<div className="page-header p-shadow-5">
			<LogoImage />
			<h1 className="bold">Eli Donuts</h1>
			<h2>Donuts artesanais sob encomenda</h2>
			<div className="arrow" />
		</div>
	);
}