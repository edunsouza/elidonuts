import React from 'react';
import { Box, Typography } from '@material-ui/core';

import './OrderNow.scss';

export default function OrderNow() {
    return (
        <Box className="order-now">
            <Typography variant="subtitle1" className="text-center clear-bottom">
                Faça seu pedido
            </Typography>

            <Box className="eduardo">
                <div>Foto 1</div>
                <div>Foto 2</div>
                <div>Foto 3</div>
                <div>Foto 4</div>
            </Box>
        </Box >
    );
}