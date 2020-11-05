import React from 'react';

import { Button } from 'primereact/button';

import './ProductSelector.scss';

export default function ProductSelector({ name, description, image, onIncrement, onDecrement, onFill }) {
    return (
        <div className="product-selector">
            <h1 className="subtitle2 bold">{name}</h1>
            <p className="text1">{description}</p>
            <img src={image} />
            <span className="p-buttonset">
                <Button onClick={onDecrement} size="sm" icon="pi pi-minus" />
                <Button onClick={onFill} size="sm" label="Completar" />
                <Button onClick={onIncrement} size="sm" icon="pi pi-plus" />
            </span>
        </div>
    );
}