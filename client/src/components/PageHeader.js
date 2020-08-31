import React from 'react';
import { Container, AppBar, Toolbar, Box, Typography } from '@material-ui/core';

import './PageHeader.scss';
import logoImage from '../images/logo_no_bg.png';

export default function PageHeader() {
	return (
		<Container disableGutters={true} maxWidth={false}>
			<AppBar id="page-header" elevation={3} position="static" color="primary">
				<Toolbar>
					<Box>
						<img alt="donut logo" src={logoImage} />
						<Typography variant="h1">Eli Donuts</Typography>
						<Typography variant="h2">Donuts artesanais sob encomenda</Typography>
						<div className="arrow" />
					</Box>
				</Toolbar>
			</AppBar>
		</Container>
	);
}