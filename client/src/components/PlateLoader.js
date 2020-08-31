import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import './PlateLoader.scss'

export default function PlateLoader() {
    const [removePlate, shouldRemovePlate] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            shouldRemovePlate(true);
        }, 2500);

        return () => {
            clearTimeout(timeoutId);
        };
    });

    return (
        <div className={clsx('loader', removePlate && 'plate-move')}>
            <span />
            <div className="donut-loading" />
        </div>
    );
}