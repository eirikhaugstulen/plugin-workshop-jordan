import React from 'react';
import { CircularLoader } from '@dhis2/ui';
import styles from './LoadingSpinner.module.css';

export const LoadingSpinner: React.FC = () => {
    return (
        <div className={styles.container}>
            <CircularLoader small />
        </div>
    );
}; 