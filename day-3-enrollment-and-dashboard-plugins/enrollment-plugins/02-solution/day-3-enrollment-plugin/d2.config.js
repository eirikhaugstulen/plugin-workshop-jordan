/** @type {import('@dhis2/cli-app-scripts').D2Config} */
const config = {
    type: 'app',

    entryPoints: {
        app: './src/App.tsx',
        plugin: './src/Plugin.tsx',
    },

    // Assignment 6: Add custom authority for toggle button permission
    customAuthorities: ['F_ENROLLMENT_PLUGIN'],
}

module.exports = config
