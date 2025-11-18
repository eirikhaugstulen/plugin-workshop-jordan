# Assignment 1

## Objective

Create a dashboard plugin and add it to the DHIS2 dashboard.

## Steps

1. Create a new dashboard plugin by using the `npm create @dhis2/app` command
2. Add a new entrypoint making the app into a plugin
3. Make sure to set the type to 'DASHBOARD' in the d2.config.js file (see below)
4. Build the plugin by running `npm build` or `pnpm build`
5. Manually upload the plugin to the DHIS2 instance by using the App Management app
6. Edit the dashboard and add the plugin to it. The plugin should appear under Apps.

## Dashboard plugin type

In the d2.config.js file, you have to specify that this app / plugin is meant to work as a dashboard plugin.

You do this by setting the type to 'DASHBOARD'.

```ts
type: 'DASHBOARD',
```