import React from "react";
import { useApiDataQuery } from "../hooks/useApiDataQuery";
import { LoadingSpinner } from "../LoadingSpinner";
import { EnrollmentOverviewProps } from "../Plugin.types";
import styles from './PluginContent.module.css';

type Response = {
    eventIds: string[];
    values: {
        dataElement: string;
        value: string;
    }[];
};

export const PluginContent = ({
    teiId,
    programId,
    enrollmentId,
    orgUnitId,
    navigate
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
    })

    if (isLoading) {
        return (
            <LoadingSpinner />
        )
    }

    if (isError) {
        return (
            <div className={styles.errorContainer}>
                <span>Seems like something went wrong.</span>
                <span>Have you configured the route settings correctly?</span>
            </div>
        )
    }

    return (
        <div>
            {JSON.stringify(data, null, 2)}
        </div>
    )
}