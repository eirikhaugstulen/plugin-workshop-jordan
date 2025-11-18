# Assignment 4

## Objective

Check whether there are enrollments in any other program than the one the user is enrolled in.

## Steps

1. In the query object inside PluginContent, add a new param object containing the programId. (See guide below)
2. Read this query param in the endpoint
3. Filter all enrollments and see if there are any enrollments in other programs than the one in the query param.
4. Return a boolean value indicating if there are any enrollments in other programs than the one in the query param.



## Add a param object
```tsx
const { data, isLoading, isError } = useApiDataQuery<Response>({
    queryKey: ['is-under-treatment'],
    query: {
        resource: 'routes/is-under-treatment/run',
        id: teiId,
        // This is new
        params: {
            programId: programId
        }
        // End of new
    }
})
```
This will be added to the request as a query parameter, i.e. `?programId=1234567890`


## Read query params
```tsx
const { programId } = req.query;
```

## Filter enrollments
```tsx
const isUnderTreatment = data.enrollments.filter(enrollment => enrollment.programId === programId).length > 0;
```