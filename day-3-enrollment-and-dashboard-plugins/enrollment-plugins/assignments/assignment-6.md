# Assignment 6

## Objective

Restrict users without the proper permission to toggle the disableButton status. 

## Steps

1. Before starting, add a new permission to the d2.config.js file. When the plugin is installed, the permission should be required to toggle the disableButton status.
2. Use the `/api/me` endpoint to fetch the user's permissions
3. Check if the user has the permission to toggle the disableButton status
4. If the user does not have the permission, do not render the "Toggle disableButton" button at all.

## Less permissions than our admin and superuser?

Try to log in with the trackerAutoTestRestricted / Tracker123! user.

## How to use the permissions to restrict access?

```tsx
const hasPermission = userPermissions.some((permission) => permission.name === 'ALL' || permission.name === 'F_ENROLLMENT_PLUGIN');
```

The hasPermission variable will be a boolean that you can use to change the visibility and functionality of the plugin.

## How to add a permission to the d2.config.js file?

```tsx
customAuthorities: ['F_ENROLLMENT_PLUGIN'],
```

You can add the permission to the user role in the User Management app.