import React from 'react';

import './PlateLoader.scss'

export default function PlateLoader() {
    return (
        <div className="loader">
            <span />
            <div className="donut-shadow" />
            <div className="donut-loader" />
        </div>
    );
}