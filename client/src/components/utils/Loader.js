import React from 'react';
import { ReactComponent as LogoImage } from '../../common/images/logo.svg';

export default function Loader({ height, width }) {
    return <LogoImage className="loader-spinner" />;
};