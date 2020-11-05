import React, { useState } from 'react';
import { useSpring, config, animated as Animated } from 'react-spring';

import { ButtonPrimary, ButtonSecondary, CardPrimary } from './utils/custom';

import NewOrder from './NewOrder';
import KnowMore from './KnowMore';

import './OrderNow.scss';

const NEW_CLIENT = 'newClient';
const NEW_ORDER = 'newOrder';
const INTRO = 'intro';

export default function OrderNow() {
    const [isIntroVisible, setIntroVisible] = useState(true);
    const [step, setStep] = useState(INTRO);
    const [animationDone, setAnimationDone] = useState(false);
    const isMobile = window.outerWidth < 500;
    const getTransitions = () => {
        const width = window.outerWidth < 500 ? window.outerWidth * 1 : window.outerWidth * .8;
        const transitions = {
            from: {
                transform: `translate(-${width}px, 0px)`,
                opacity: 1,
                clipPath: `circle(${isMobile ? 70 : 40}% at 50% 50%)`
            },
            to: async next => {
                next({
                    transform: 'translate(0px, 0px)',
                    opacity: 0,
                    clipPath: 'circle(1% at 50% 50%)'
                });
                setTimeout(() => setAnimationDone(true), 400)
            }
        };

        if (step === INTRO) {
            transitions.to = {
                transform: 'translate(0px, 0px)',
                opacity: 1
            };
        }

        return transitions;
    };

    const slideSpring = useSpring({
        config: config.default,
        onRest: () => step !== INTRO && setIntroVisible(null),
        ...getTransitions(),
    });

    return (
        <div className="order-now">
            <h1 className="subtitle1 primary fade-in-shaking">Faça seu pedido</h1>
            <Animated.div className="cards">
                {animationDone && step === NEW_ORDER && <NewOrder />}
                {animationDone && step === NEW_CLIENT && <KnowMore />}
                {isIntroVisible && <Animated.div className="p-d-flex p-jc-center" style={slideSpring}>
                    <CardPrimary>
                        <CardPrimary.Header className="subtitle2">Já conhece nossos produtos?</CardPrimary.Header>
                        <CardPrimary.Footer className="p-d-flex p-flex-column p-flex-lg-row">
                            <ButtonPrimary block className="p-mx-lg-5 p-mb-2 p-mb-lg-0 pulse" onClick={() => setStep(NEW_ORDER)}>
                                Sim! Quero pedir agora
                                </ButtonPrimary>
                            <ButtonSecondary block className="p-mx-lg-5" onClick={() => setStep(NEW_CLIENT)}>
                                Sou novo por aqui
                                </ButtonSecondary>
                        </CardPrimary.Footer>
                    </CardPrimary>
                </Animated.div>}
            </Animated.div>
        </div >
    );
}