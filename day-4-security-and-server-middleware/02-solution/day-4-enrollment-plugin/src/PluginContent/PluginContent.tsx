import React from "react";
import { useApiDataQuery } from "../hooks/useApiDataQuery";
import { LoadingSpinner } from "../LoadingSpinner";
import { EnrollmentOverviewProps } from "../Plugin.types";
import styles from './PluginContent.module.css';

type Response = {
    isUnderTreatment: boolean;
};

export const PluginContent = ({
    teiId,
    programId,
}: EnrollmentOverviewProps) => {
    const { data, isLoading, isError } = useApiDataQuery<Response>({
        queryKey: ['is-under-treatment'],
        query: {
            resource: 'routes/is-under-treatment/run',
            id: teiId,
            params: {
                programId: programId
            }
        }
    });

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError) {
        return (
            <div className={styles.errorContainer}>
                <span>Seems like something went wrong.</span>
                <span>Have you configured the route settings correctly?</span>
            </div>
        );
    }

    const isUnderTreatment = data?.isUnderTreatment;

    return (
        <span className={`${styles.badge} ${isUnderTreatment ? styles.active : styles.inactive}`}>
            <span className={styles.dot} />
            {isUnderTreatment ? 'Under Treatment' : 'Not Under Treatment'}
        </span>
    );
};
