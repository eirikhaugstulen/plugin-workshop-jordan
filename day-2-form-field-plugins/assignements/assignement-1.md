# Assignment 1

## Objective

Create a form field plugin that takes in two inputs and writes the concatinated value back to a new field.

The user should input the first name and last name of a person and the plugin should write the concatenated value back to a full name field.

## Steps
1. Create a new field for the full name (text)
2. Create a new app by using the `npm create @dhis2/app` command
3. Add a new entrypoint making the app into a plugin
4. Add the plugin to any registration form by using the Tracker plugin configurator app
5. Write a function that concatenates the first name and last name and writes the value to the full name field.
6. Add a button to the form that triggers the function when clicked.

## How to get props from the capture app
```tsx
export default function Plugin({ values, setFieldValue }) {
    // Put functions and javascript code here
    return (
        <div>
            // Show buttons or inputs here
        </div>
    )
}
```

## How to write values to the form
You can write values to the form by using the `setFieldValue` function provided in the props.

```tsx
setFieldValue({
    fieldId: 'fullName',
    value: fullNameValue // This will be the concatenated value of the first name and last name
});
```


## UI Library

You can use components from the DHIS2 UI library to build your plugin.

```tsx
import { Button } from '@dhis2/ui';

<Button>Click me</Button>
```