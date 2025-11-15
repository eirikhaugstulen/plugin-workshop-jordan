# Assignment 3

## Objective

Add an input field to the form that allows the user to input the ID of the person and fetch the data from the external source.

## Steps

1. Import the `Input` component from the DHIS2 UI library.
2. Use a state hook to store the value of the input field.
3. Copy over the styles `./day-3-form-field-plugins/Plugin.module.css` to your plugin.
4. Use the styles to style the input field and plugin container.

## How to use the `@dhis2/ui` library

You can use components from the DHIS2 UI library to build your plugin.

```tsx
import { Input } from '@dhis2/ui';

<Input />
```

Some of these components have required props. If you're using typescript, this will be indicated by a red underline.

For example, this is how you would use the `Input` component:

```tsx
import { useState } from 'react';

export default function Plugin() {
    const [value, setValue] = useState('');

    return (
        <Input 
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    )
}
```

## How to use the styles

You can use the styles by adding the class name to the component.

```tsx
<Input className={classes.input} />
```