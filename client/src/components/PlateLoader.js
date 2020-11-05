import React from 'react';

import './PlateLoader.scss'

export default function PlateLoader({ onFinish }) {
    const finish = ({ animationName }) => animationName === 'plate-zoom-out' && onFinish();
    return (
        <div className="loader" onAnimationEnd={finish}>
            <span />
            <div className="donut-shadow" />
            <div className="donut-loader" />
        </div>
    );
}