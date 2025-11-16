# Assignment 7

## Objective

Restrict users without the proper permission to toggle the disableButton status. 

## Steps

1. Before starting, decide on a permission that should be required to toggle the disableButton status. You can use any permission that is available in the DHIS2 instance.
2. Use the `/api/me` endpoint to fetch the user's permissions
3. Check if the user has the permission to toggle the disableButton status
4. If the user does not have the permission, do not render the "Toggle disableButton" button at all.

# Less permissions than our admin and superuser?

Try to log in with the tracker / Tracker123 user.

# How to use the permissions to restrict access?

```tsx
const hasPermission = userPermissions.some((permission) => permission.name === 'ALL' || permission.name === 'F_PERMISSION_NAME');
```

The hasPermission variable will be a boolean that you can use to change the visibility and functionality of the plugin.
