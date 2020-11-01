import React, { useState } from 'react';
import PlateLoader from './PlateLoader';
import OrderNow from './OrderNow';

export default function PageBody() {
    // const [isLoading, setLoading] = useState(true);


    // TODO: DELETE
    const [isLoading, setLoading] = useState(false);


    return (
        <>
            {isLoading
                ? <PlateLoader onFinish={() => setLoading(false)} />
                : <OrderNow />
            }
        </>
    );
};