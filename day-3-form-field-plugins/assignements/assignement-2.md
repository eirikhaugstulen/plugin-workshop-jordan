# Assignment 2

## Objective

Extend the previous assignment by creating a function that fetches data from an external source and writes it to the form.

## Steps

1. Create a new async function that fetches data from the external source
2. Write the data to the form by using the `setFieldValue` function provided in the props.
3. Add a button to the form that triggers the function when clicked.

## How to fetch data from the external source

The API is available at `https://www.jordan-workshop.dev/api/civil-registry/${id}`.

You can use `fetch()` to trigger an API call and get the data.

```tsx
const response = await fetch(`https://www.jordan-workshop.dev/api/civil-registry/${id}`);
const data = await response.json();
```

Use console.log to print the data to the console for understanding the data structure.