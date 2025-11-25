# Assignment 1

## Objective

Create a new form field plugin that can be used in the Capture app.

## Steps

1. Create a new field for the full name (text) in the Maintenance app
2. Create a new app by using the `npm create @dhis2/app` command
3. Add a new entrypoint making the app into a plugin

## How to create a new app

Run the following command in your terminal:

```bash
npm create @dhis2/app
```

Follow the prompts to create a new app. Name your app something like `form-field-plugin`.

## How to add a plugin entrypoint

In your `d2.config.js` file, add a new entrypoint for the plugin:

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

Then create a new file `src/Plugin.tsx` with the following content:

```tsx
export default function Plugin(props) {
    return (
        <div>
            <p>My Plugin</p>
        </div>
    )
}
```

## How to start the app

Run the following command in your terminal:

```bash
npm start
```

This will start the development server and open the app in your browser.

