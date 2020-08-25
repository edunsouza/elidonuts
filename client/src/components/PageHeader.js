import React from 'react';
import { Container, AppBar, Toolbar, Box, Typography } from '@material-ui/core';

export default function PageHeader() {
	return (
		<Container disableGutters={true} maxWidth={false}>
			<AppBar elevation={3} position="static" color="primary">
				<Toolbar>
					<Box mb={2} mt={1} flexShrink={1}>
						<Typography color="secondary" align="center" variant="h6">Eli Donuts - Donuts Artesanais sob encomenda</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</Container>
	);
}