# Assignment 4

## Objective

Navigate the user to the enrollmentEventNew page when clicking a button.

## Steps

1. Use the `navigate()` function to navigate the user to the enrollmentEventNew page.
2. Render a Button component that triggers the navigation when clicked.
3. Use the IDs provided by the capture app to navigate with the correct context.


# What is the `navigate()` function?

The `navigate()` function is a function that is passed to the plugin by the capture app. It is used to navigate the user to different pages in the DHIS2 application. It takes in an URL (string) as an argument. Use the capture app to find out the correct URL to navigate to.

```tsx
navigate(`/enrollmentEventNew?programId=${programId}&orgUnitId=${orgUnitId}...etc`);
```