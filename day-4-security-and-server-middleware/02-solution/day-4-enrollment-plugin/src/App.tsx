import { useDataEngine, useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import React, { FC } from 'react'
import classes from './App.module.css'
import { useQuery } from '@tanstack/react-query'

interface QueryResults {
    me: {
        name: string
    }
}

const MyApp: FC = () => {
    const dataEngine = useDataEngine();
    const { data, error, isLoading } = useQuery({
        queryKey: ['me'],
        queryFn: () => dataEngine.query({
            me: {
                resource: 'me',
                params: {
                    fields: ['name'],
                },
            }
        }) as unknown as Promise<QueryResults>,
    })
    
    if (isLoading) {
        return <span>{i18n.t('Loading...')}</span>
    }

    if (error) {
        return <span>{error.message}</span>
    }

    const { name } = data.me;

    return (
        <div className={classes.container}>
            <h1>{i18n.t('Hello {{name}}', { name: name })}</h1>
            <h3>{i18n.t('Welcome to DHIS2 with TypeScript!')}</h3>
        </div>
    )
}

export default MyApp
