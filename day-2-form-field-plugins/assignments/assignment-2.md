# Assignment 2

## Objective

Install the Tracker Plugin Configurator app and add your plugin to the configuration so it can be used in the Capture app.

## Steps

1. Open the App Management app in your DHIS2 instance
2. Search for "Tracker Plugin Configurator" in the App Hub
3. Install the Tracker Plugin Configurator app
4. Open the Tracker Plugin Configurator app
5. Add your plugin to the configuration for a registration form

## How to add a plugin to the configuration

1. In the Tracker Plugin Configurator app, select the program you want to add the plugin to
2. Select the registration form
3. Click "Add Element"
4. Select your plugin from the list or add a local plugin by typing in http://localhost:3000/plugin.html
5. Edit the plugin settings and add a configuration that allows the plugin to read and write data to the form
   1. First name => firstName
   2. Last name => lastName
   3. Full name => fullName
6. Save the configuration

## Verifying the plugin works

1. Open the Capture app
2. Navigate to the program you configured
3. Start a new registration
4. You should see your plugin rendered in the form

