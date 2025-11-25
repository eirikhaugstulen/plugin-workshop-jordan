# Assignment 5

## Objective

Add another button to the plugin.
This new button should allow users with specific roles to toggle between whether the previously created "Create new" button is disabled or not.

## Steps

1. Add a new button to the plugin called "Toggle disableButton"
2. When clicked, a function should get the data fetched from the data store, toggle the disableButton value (true -> false or false -> true) and write the new value back to the data store
3. To update the data store, you can use the `useMutation` hook from the `@tanstack/react-query` library
4. When the data store is updated, trigger a re-fetch of the data store entry with the `useApiDataQuery` hook


# How to use the `useMutation` hook

You can use the `useMutation` hook to write data back to the API.

```tsx
const updateDataStore = async () => {
    const response = await dataEngine.mutate({
        resource: 'datastore/enrollmentplugin/configuration',
        data: {
            updatedValue,
        },
    });

    return response.data;
}

const { mutate, isPending, error } = useMutation({
    mutationFn: updateDataStore,
});
```

# How to invalidate / refetch a query

You can invalidate / refetch a query by using the `invalidateQueries` function from the `@tanstack/react-query` library.

Here's an example of how to invalidate / refetch a query:

```tsx
const { invalidateQueries } = useQueryClient();

// The queryKey should match the queryKey used when fetching the data
invalidateQueries({ queryKey: ['dataStore', 'enrollmentplugin']});
```

You would typically pass this in the `onSuccess` callback of the `useMutation` hook.

```tsx
const { mutate, isPending, error } = useMutation({
    mutationFn: updateDataStore,
    onSuccess: () => {
        invalidateQueries({ queryKey: ['dataStore', 'enrollmentplugin']});
    },
});
```