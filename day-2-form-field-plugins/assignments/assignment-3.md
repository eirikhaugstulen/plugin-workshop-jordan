# Assignment 3

## Objective

Use the values from the form to concatenate first name and last name into a full name field.

## Steps

1. Access the `values` prop from the plugin to read form values
2. Write a function that concatenates the first name and last name
3. Use the `setFieldValue` function to write the concatenated value to the full name field
4. Add a button to the form that triggers the function when clicked

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

## How to read values from the form

The `values` prop contains all the current form values. You can access them by their field ID:

```tsx
const firstName = values['firstName']; // Replace with actual field ID
const lastName = values['lastName'];   // Replace with actual field ID
```

## How to write values to the form

You can write values to the form by using the `setFieldValue` function provided in the props.

```tsx
setFieldValue({
    fieldId: 'fullName', // Replace with actual field ID
    value: fullNameValue // This will be the concatenated value of the first name and last name
});
```

## Example implementation

```tsx
export default function Plugin({ values, setFieldValue }) {
    const handleConcatenate = () => {
        const firstName = values['firstName'] || '';
        const lastName = values['lastName'] || '';
        const fullName = `${firstName} ${lastName}`.trim();
        
        setFieldValue({
            fieldId: 'fullName',
            value: fullName
        });
    };

    return (
        <div>
            <Button onClick={handleConcatenate}>
                Generate Full Name
            </Button>
        </div>
    )
}
```

## UI Library

You can use components from the DHIS2 UI library to build your plugin.

```tsx
import { Button } from '@dhis2/ui';

<Button>Click me</Button>
```

