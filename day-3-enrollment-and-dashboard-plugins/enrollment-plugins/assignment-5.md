# Assignment 5

## Objective

Add a disableButton configuration option to the data store and make the plugin adhere to it. If the option is true, the button should be disabled.

## Steps

1. Open up the Datastore Management app from the DHIS2 App hub
2. Create a new datastore with the following configuration:
   1. Namespace: `enrollmentplugin`
   2. Key: 'configuration'
3. Set the value to be an object with the following configuration:
   1. disableButton: boolean
4. Fetch this data store entry with the `useApiDataQuery` hook
5. Check the configuration value in the plugin and disable the button if the value is true.

# What is the data store?

The data store is a way to store fully flexible data in a DHIS2 instance. 

It is basically your very own database that you can use for data, metadata or configuration objects.
