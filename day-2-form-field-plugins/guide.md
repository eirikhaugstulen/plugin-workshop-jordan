# Day 2 - Form Field Plugins

## Overview

Today we will learn how to create form field plugins for the DHIS2 Capture app. Form field plugins allow you to extend the registration and data entry forms with custom functionality.

## What are Form Field Plugins?

Form field plugins are custom components that can be added to registration and event forms in the Capture app. They can:

- Read values from other form fields
- Write values to form fields
- Fetch data from external sources
- Perform calculations and validations

## Learning Objectives

By the end of this day, you will be able to:

1. Create a new DHIS2 app with a plugin entrypoint
2. Configure the plugin in the Tracker Plugin Configurator
3. Read and write form field values
4. Fetch data from external APIs
5. Style your plugin to match the DHIS2 design system

## Prerequisites

- Completed Day 1 setup
- DHIS2 instance running locally
- Node.js and npm installed

## Getting Started

### Creating a New Form Field Plugin

1. Create a new app using the DHIS2 CLI:

```bash
npm create @dhis2/app
```

2. Follow the prompts to create your app. Choose TypeScript for better type safety.

3. Add a plugin entrypoint to your `d2.config.js`:

```js
const config = {
    type: 'app',
    name: 'form-field-plugin',
    title: 'Form Field Plugin',
    entryPoints: {
        app: './src/App.tsx',
        plugin: './src/Plugin.tsx',
    },
}

module.exports = config
```

4. Create your `Plugin.tsx` file:

```tsx
export default function Plugin(props) {
    return (
        <div>
            <p>My Form Field Plugin</p>
        </div>
    )
}
```

## Plugin Props

Form field plugins receive several props from the Capture app:

| Prop | Type | Description |
|------|------|-------------|
| `values` | `Record<string, any>` | Current form field values |
| `errors` | `Record<string, string[]>` | Validation errors |
| `warnings` | `Record<string, string[]>` | Validation warnings |
| `fieldsMetadata` | `Record<string, FieldMetadata>` | Metadata about form fields |
| `setFieldValue` | `function` | Function to update a field value |
| `setContextFieldValue` | `function` | Function to update context fields |
| `viewMode` | `boolean` | Whether the form is in view mode |
| `formSubmitted` | `boolean` | Whether the form has been submitted |
| `orgUnitId` | `string` | The organization unit ID |

## Assignments

Work through the assignments in the `assignments/` folder:

1. **Assignment 1**: Create a basic form field plugin
2. **Assignment 2**: Configure the plugin in the Tracker Plugin Configurator
3. **Assignment 3**: Read form values and concatenate fields
4. **Assignment 4**: Fetch data from an external API
5. **Assignment 5**: Add an input field and styling

## Resources

- Type definitions: `resources/types.ts`
- CSS styles: `resources/Plugin.module.css`
- Solution code: `02-solution/`

## Tips

- Use the browser console to inspect the props your plugin receives
- The DHIS2 UI library (`@dhis2/ui`) provides pre-built components
- Test with different form configurations to ensure your plugin works correctly

