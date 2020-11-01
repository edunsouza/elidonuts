import React from 'react';
import classnames from 'classnames';

import { ReactComponent as DonutBox2 } from '../common/images/donut-path-animation/small-box-animated.svg';
import { ReactComponent as DonutBox6 } from '../common/images/donut-path-animation/large-box-animated.svg';

import './DonutBox.scss';


export default function DonutBox({ size, className, onClick = () => { } }) {
    const Box = size === 2 ? DonutBox2 : DonutBox6;
    return (
        <div className={classnames('donut-box', className)} onClick={onClick}>
            <span className="text1">{size} unidades</span>
            <Box className="box-entrance" />
            <Box className="box-overlay" />
        </div >
    );
}