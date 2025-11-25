/** @type {import('@dhis2/cli-app-scripts').D2Config} */
const config = {
    type: 'app',
    name: 'day-3-dashboard-plugin',
    title: 'Day 3 Dashboard Plugin',
    pluginType: 'DASHBOARD',

    entryPoints: {
        app: './src/App.tsx',
        plugin: './src/Plugin.tsx',
    },
}

module.exports = config
