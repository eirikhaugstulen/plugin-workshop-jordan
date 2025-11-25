# Assignment 1

## Objective

Fetch and display the attributes of the current tracked entity. List out all attributes in a list.

## Steps

1. Assert that the capture app provides a teiId in the props
2. In PluginContent.tsx, add a `useApiDataQuery` hook that points to the correct API endpoint
3. Add an appropriate loading state and error handling for the query
4. Display the tracked entity attributes in a list

## How to use the `useApiDataQuery` hook

You can use the `useApiDataQuery` hook to fetch data from the API.

```tsx
export const PluginContent = ({ teiId }) => {
    const { data, isLoading, error } = useApiDataQuery({
        queryKey: ['trackedEntity', teiId],
        query: {
            resource: 'tracker/trackedEntities',
            id: teiId,
        }
    });

    // rest of the code...
}
```

The `queryKey` is an array of strings that uniquely identifies the query. This is used to cache the data and avoid duplicate requests, but it is not used in this assignment.

# Render a list of attributes

You can use the `data` state to render a list of attributes.

```tsx
return (
    <div>
        {data.attributes.map((attribute) => (
            <div key={attribute.attribute}>
                {attribute.displayName}: {attribute.value}
            </div>
        ))}
    </div>
)
```

# Loading state

You can use the `isLoading` state to show a loading indicator. I have added a LoadingSpinner component to the template that you can use.

```tsx
import { LoadingSpinner } from "../LoadingSpinner";

if (isLoading) {
    return <LoadingSpinner />;
}
```