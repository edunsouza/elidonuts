import React from 'react';
import classnames from 'classnames';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const ButtonPrimary = ({ children, onClick, block = false, size, className, ...props }) => {
    const sizes = { sm: 'p-button-sm', lg: 'p-button-lg' };
    return (
        <Button
            label={children}
            onClick={onClick}
            className={classnames(
                'p-shadow-4',
                block && 'button-block',
                sizes[size],
                className
            )}
            {...props || {}}
        />
    );
};

const ButtonSecondary = props => (<ButtonPrimary {...props} className={classnames('p-button-secondary', props.className)} />);

const CardPrimary = ({ className, children }) => {
    const childArray = React.Children.toArray(children);
    const header = childArray.find(child => child.type === CardPrimary.Header);
    const content = childArray.find(child => child.type === CardPrimary.Content);
    const footer = childArray.find(child => child.type === CardPrimary.Footer);
    return (
        <Card className={classnames('p-shadow-3', className)} header={header} footer={footer}>
            {content}
        </Card>
    );
};

CardPrimary.Header = ({ className, children }) => (<div className={className}>{children}</div>);
CardPrimary.Content = ({ className, children }) => (<div className={className}>{children}</div>);
CardPrimary.Footer = ({ className, children }) => (<div className={className}>{children}</div>);

export {
    ButtonPrimary,
    ButtonSecondary,
    CardPrimary,
};