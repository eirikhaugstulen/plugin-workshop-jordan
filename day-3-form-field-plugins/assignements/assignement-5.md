# Assignment 5

## Objective

Use the DHIS2 routes instead of fetching the data directly from the browser

## Steps

1. Download the Route manager app from the DHIS2 App hub
2. Create a new route that fetches the data from the external source
   1. It should be called `civil-registry`
   2. Do not add any authentication or headers
3. Import the useDataEngine hook from the @dhis2/app-runtime library
4. Use the useDataEngine hook to fetch the data from the route
5. Write the data to the form by using the `setFieldValue` function provided in the props.


## How to use the `@dhis2/app-runtime` library

You can use the `useDataEngine` hook from the `@dhis2/app-runtime` library to fetch data from the DHIS2 routes.

```tsx
const dataEngine = useDataEngine();
```

Replace the fetch call with the dataEngine.query method.

```tsx
const response = await dataEngine.query({
    orgUnitParent: {
        resource: 'orgUnits/id',
        params: {
            fields: 'id,parent',
        }
    }
});

const { data } = response.route;

setFieldValue({
    fieldId: 'firstName',
    value: data.firstName,
});
```