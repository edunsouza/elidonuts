import React, { useState } from 'react';

import './PlateLoader.scss'

export default function PlateLoader() {
    const [isLoading, setLoading] = useState(true);
    const finish = ({ animationName }) => {
        setLoading(animationName !== 'plate-zoom-out');
    };
    return (
        <>
            {
                isLoading &&
                <div className="loader" onAnimationEnd={finish}>
                    <span />
                    <div className="donut-shadow" />
                    <div className="donut-loader" />
                </div>
            }
        </>
    );
}