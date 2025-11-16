# Assignment 4

## Objective

Replace the existing function for fetching data and replace it with a mutiation hook from `@tanstack/react-query`.

## Steps

1. Use the `useMutation` hook from `@tanstack/react-query` to fetch data from the external source.
2. Use the `onSuccess` and `onError` callbacks to update the form with the data.
3. Add a loading state to the Button component.
4. Add an appropriate error message to the plugin.

## How to use the `@tanstack/react-query` library

You can use the `useMutation` hook from `@tanstack/react-query` to fetch data from the external source.

```tsx
const { mutate, isPending, error } = useMutation({
    mutationFn: fetchData,
    onSuccess: (data) => {
        console.log(data);
    },
    onError: (error) => {
        console.error(error);
    },
});
```

The `mutationFn` is a function that fetches the data from the external source.

```tsx
const fetchData = async (id: string) => {
    const response = await fetch(`https://www.jordan-workshop.dev/api/civil-registry/${id}`);
    return response.json();
}
```

The returned mutation object has the following properties:
- `mutate`: A function that triggers the mutation.
- `isPending`: A boolean that indicates if the mutation is pending.
- `error`: An error object if the mutation fails.

Mutation: 
```tsx
const { mutate, isPending, error } = useMutation({
    mutationFn: fetchData,
    onSuccess: (data) => {
        // Update the form with the data
    },
    onError: (error) => {
        // Handle the error
    },
});
```

Query:
```tsx
const { data, isLoading, error } = useQuery({
    queryKey: ['civil-registry', id],
    queryFn: fetchData,
});
```

The `queryKey` is an array of strings that uniquely identifies the query.

```tsx
const queryKey = ['civil-registry', id];
```
