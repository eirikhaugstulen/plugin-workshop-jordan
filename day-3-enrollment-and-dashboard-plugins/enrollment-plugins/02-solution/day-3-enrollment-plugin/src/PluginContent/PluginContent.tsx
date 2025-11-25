import React from "react";
import { useDataEngine } from "@dhis2/app-runtime";
import {
    DataTable,
    DataTableHead,
    DataTableBody,
    DataTableRow,
    DataTableCell,
    DataTableColumnHeader,
    Button,
} from "@dhis2/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EnrollmentOverviewProps } from "../Plugin.types";
import { useApiDataQuery } from "../hooks/useApiDataQuery";
import { LoadingSpinner } from "../LoadingSpinner";
import styles from "./PluginContent.module.css";

type TrackedEntityAttribute = {
    attribute: string;
    displayName: string;
    value: string;
};

type TrackedEntity = {
    attributes: TrackedEntityAttribute[];
};

type DataStoreConfig = {
    disableButton: boolean;
};

type UserResponse = {
    authorities: string[];
};

export const PluginContent = ({
    teiId,
    programId,
    enrollmentId,
    orgUnitId,
    navigate
}: EnrollmentOverviewProps) => {
    const dataEngine = useDataEngine();
    const queryClient = useQueryClient();

    // Assignment 1: Assert teiId is provided
    if (!teiId) {
        return (
            <div className={styles.errorContainer}>
                No tracked entity ID provided
            </div>
        );
    }

    // Assignment 1: Fetch tracked entity attributes
    const {
        data: trackedEntity,
        isLoading: isLoadingTei,
        error: teiError
    } = useApiDataQuery<TrackedEntity>({
        queryKey: ['trackedEntity', teiId],
        query: {
            resource: 'tracker/trackedEntities',
            id: teiId,
        }
    });

    // Assignment 4: Fetch datastore configuration
    const {
        data: config,
        isLoading: isLoadingConfig,
    } = useApiDataQuery<DataStoreConfig>({
        queryKey: ['dataStore', 'enrollmentplugin', 'configuration'],
        query: {
            resource: 'dataStore/enrollmentplugin/configuration',
        }
    });

    // Assignment 6: Fetch user permissions
    const {
        data: userData,
        isLoading: isLoadingUser,
    } = useApiDataQuery<UserResponse>({
        queryKey: ['me'],
        query: {
            resource: 'me',
            params: {
                fields: 'authorities',
            }
        }
    });

    // Assignment 5: Mutation to update datastore
    const { mutate: toggleDisableButton, isPending: isToggling } = useMutation({
        mutationFn: async () => {
            const newValue = !config?.disableButton;
            await dataEngine.mutate({
                resource: 'dataStore/enrollmentplugin',
                type: 'update',
                id: 'configuration',
                data: {
                    disableButton: newValue,
                },
            });
            return newValue;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['dataStore', 'enrollmentplugin', 'configuration'] });
        },
    });

    // Assignment 6: Check user permissions
    const hasPermission = userData?.authorities?.some(
        (authority) => authority === 'ALL' || authority === 'F_ENROLLMENT_PLUGIN'
    ) ?? false;

    // Loading state
    if (isLoadingTei || isLoadingConfig || isLoadingUser) {
        return <LoadingSpinner />;
    }

    // Error handling
    if (teiError) {
        return (
            <div className={styles.errorContainer}>
                Error loading tracked entity: {teiError.message}
            </div>
        );
    }

    // Assignment 3: Navigate to enrollmentEventNew page
    const handleCreateNewEvent = () => {
        navigate(`/enrollmentEventNew?programId=${programId}&orgUnitId=${orgUnitId}&teiId=${teiId}&enrollmentId=${enrollmentId}`);
    };

    const attributes = trackedEntity?.attributes ?? [];
    const isButtonDisabled = config?.disableButton ?? false;

    return (
        <div>
            {/* Assignment 2: DataTable for attributes */}
            <DataTable>
                <DataTableHead>
                    <DataTableRow>
                        <DataTableColumnHeader>Attribute name</DataTableColumnHeader>
                        <DataTableColumnHeader>Attribute value</DataTableColumnHeader>
                    </DataTableRow>
                </DataTableHead>
                <DataTableBody>
                    {attributes.map((attribute) => (
                        <DataTableRow key={attribute.attribute}>
                            <DataTableCell>{attribute.displayName}</DataTableCell>
                            <DataTableCell>{attribute.value}</DataTableCell>
                        </DataTableRow>
                    ))}
                </DataTableBody>
            </DataTable>

            {/* Assignment 3: Navigation button */}
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                <Button
                    primary
                    onClick={handleCreateNewEvent}
                    disabled={isButtonDisabled}
                >
                    Create new event
                </Button>

                {/* Assignment 5 & 6: Toggle button (only for authorized users) */}
                {hasPermission && (
                    <Button
                        secondary
                        onClick={() => toggleDisableButton()}
                        disabled={isToggling}
                    >
                        {isToggling ? 'Toggling...' : 'Toggle disableButton'}
                    </Button>
                )}
            </div>
        </div>
    );
};
