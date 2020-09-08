import React, { useState } from 'react';
import clsx from 'clsx';
import { Box, Paper, Typography, Button } from '@material-ui/core';

import { useRootContext } from './RootContext';

import { ReactComponent as DonutIcon1 } from '../common/images/donuts-types/donut-type-1.svg';
import { ReactComponent as DonutIcon2 } from '../common/images/donuts-types/donut-type-2.svg';
import { ReactComponent as DonutIcon3 } from '../common/images/donuts-types/donut-type-3.svg';
import { ReactComponent as DonutIcon4 } from '../common/images/donuts-types/donut-type-4.svg';
import { ReactComponent as DonutIcon5 } from '../common/images/donuts-types/donut-type-5.svg';
import { ReactComponent as DonutIcon6 } from '../common/images/donuts-types/donut-type-6.svg';

import './OrderNow.scss';

const NEW_CLIENT = 'newClient';
const NEW_ORDER = 'newOrder';
const OUT_ANIMATION = 'slide-out-right';

export default function OrderNow() {
    const { store, dispatch } = useRootContext();
    const [isIntroVisible, setIntroVisibility] = useState(true);
    const [step, setStep] = useState('intro');

    const animatePanelOut = nextStep => {
        dispatch({ type: 'SET_ANIMATIONS', payload: { orderIntro: OUT_ANIMATION } });
        setStep(nextStep);
    };

    const onHideIntro = ({ animationName }) => setIntroVisibility(animationName !== OUT_ANIMATION);

    return (
        <Box className="order-now">
            <Typography variant="subtitle1" className="text-center clear-bottom">
                Faça seu pedido
            </Typography>
            {
                isIntroVisible &&
                <Box className={clsx('order-intro', store.animations.orderIntro)} onAnimationEnd={onHideIntro}>
                    <Paper elevation={3}>
                        <Typography variant="subtitle1" className="clear-bottom">
                            Já conhece nossos produtos?
                        </Typography>

                        <Box className="order-intro-buttons">
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={() => animatePanelOut(NEW_ORDER)}
                            >
                                Sim, e quero pedir mais!
                            </Button>

                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                onClick={() => animatePanelOut(NEW_CLIENT)}
                            >
                                Não, só dando uma olhadinha
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            }
            {
                step === NEW_ORDER &&
                <Box className="new-order">
                    <Paper elevation={3}>
                        <Typography variant="subtitle1" className="clear-bottom">
                            Pedido feito!
                        </Typography>
                    </Paper>
                </Box>
            }
            {
                step === NEW_CLIENT &&
                <Box className="new-client">
                    <Paper elevation={3}>
                        <Typography variant="subtitle1" className="clear-bottom">
                            Viu mais...
                        </Typography>
                    </Paper>
                </Box>
            }
        </Box >
    );
}