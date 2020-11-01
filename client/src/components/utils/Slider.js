import React, { useState, useEffect } from 'react';
import { useTransition, config, animated } from 'react-spring';

export default function Slider({ activeIndex = 0, children, ...props }) {
    const [prevStep, setPrevStep] = useState(activeIndex || 0);
    const trackWidth = window.outerWidth < 500 ? window.outerWidth * 1 : window.outerWidth * .8;
    const startingPoint = prevStep <= activeIndex ? -trackWidth : trackWidth;
    const activeSlide = React.Children.toArray(children)[activeIndex] || React.Children.toArray(children)[0];
    const transitions = useTransition(activeSlide, i => i.key, {
        config: config.default,
        from: {
            transform: `translate(${startingPoint}px, 0px)`,
            opacity: 0
        },
        enter: {
            transform: `translate(0, 0)`,
            opacity: 1
        },
        leave: {
            transform: `translate(${-startingPoint}px, 0px)`,
            opacity: 0
        }
    });

    useEffect(() => void setPrevStep(activeIndex), [activeIndex]);

    return transitions.map(t =>
        (
            <animated.div {...props} key={t.key} style={t.props}>
                {t.item}
            </animated.div>
        )
    );
}