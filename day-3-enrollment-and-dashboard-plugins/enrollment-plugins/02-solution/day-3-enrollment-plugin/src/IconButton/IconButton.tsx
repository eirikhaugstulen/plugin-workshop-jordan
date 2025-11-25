import React from 'react';
import cx from 'classnames';
import styles from './IconButton.module.css';

type Props = {
    children: React.ReactNode,
    className?: string,
    dataTest?: string,
    disabled?: boolean,
    onClick?: () => void,
};

export const IconButton = ({ children, className, dataTest, onClick, disabled, ...passOnProps }: Props) => (
    <button
        {...passOnProps}
        onClick={onClick}
        disabled={disabled}
        data-test={dataTest}
        className={cx(styles.button, { disabled, ...(className ? { [className]: true } : {}) })}
        type="button"
        tabIndex={0}
    >
        {children}
    </button>
);
