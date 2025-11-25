import { useDataEngine } from '@dhis2/app-runtime';
import {
    useQuery,
    QueryFunction,
    UseQueryOptions,
    QueryKey,
} from '@tanstack/react-query';

export type PossiblyDynamic<Type, InputType> = Type | ((input: InputType) => Type);
export type QueryVariables = Record<string, any>;

type QueryParameterSingularValue = string | number | boolean;
interface QueryParameterAliasedValue {
    [name: string]: QueryParameterSingularValue;
}
type QueryParameterSingularOrAliasedValue = QueryParameterSingularValue | QueryParameterAliasedValue;
type QueryParameterMultipleValue = QueryParameterSingularOrAliasedValue[];
export type QueryParameterValue = QueryParameterSingularValue | QueryParameterAliasedValue | QueryParameterMultipleValue | undefined;

export interface QueryParameters {
    pageSize?: number;
    [key: string]: QueryParameterValue;
}

export interface ResourceQuery {
    resource: string;
    id?: PossiblyDynamic<string, QueryVariables>;
    data?: PossiblyDynamic<any, QueryVariables>;
    params?: PossiblyDynamic<QueryParameters, QueryVariables>;
}


type UseApiDataQueryProps<
    TResultData,
    TError = Error,
    TData = TResultData,
    TQueryKey extends QueryKey = QueryKey,
> = Omit<UseQueryOptions<TResultData, TError, TData, TQueryKey>, 'queryFn'> & {
    query: ResourceQuery;
};

export const useApiDataQuery = <
    TResultData,
    TError = Error,
    TData = TResultData,
    TQueryKey extends QueryKey = QueryKey,
>({
    query,
    queryKey,
    ...options
}: UseApiDataQueryProps<TResultData, TError, TData, TQueryKey>) => {
    const dataEngine = useDataEngine();

    const queryFn: QueryFunction<TResultData, TQueryKey> = async () => {
        const response = await dataEngine.query({ apiDataQuery: query });
        return response.apiDataQuery as TResultData;
    };

    return useQuery<TResultData, TError, TData, TQueryKey>({
        queryKey,
        queryFn,
        ...options,
    });
};
