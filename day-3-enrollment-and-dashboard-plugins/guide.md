# Day 3 - Enrollment & Dashboard Plugins

## Overview

Today we will learn how to create two types of plugins:
1. **Enrollment Plugins** - Widgets that appear on the enrollment pages in the Capture app
2. **Dashboard Plugins** - Custom visualizations and widgets for DHIS2 dashboards

## Learning Objectives

By the end of this day, you will be able to:

1. Create enrollment plugins that display tracked entity information
2. Use the `useApiDataQuery` hook to fetch data from the DHIS2 API
3. Render data in tables using DHIS2 UI components
4. Navigate users to different pages in the Capture app
5. Create dashboard plugins for DHIS2 dashboards
6. Work with the DHIS2 Data Store for configuration

## Enrollment Plugins

### What are Enrollment Plugins?

Enrollment plugins are custom widgets that appear on the enrollment pages in the Capture app. They receive context about the current tracked entity and enrollment, allowing you to:

- Display additional information about the tracked entity
- Show data from external systems
- Provide shortcuts to common actions
- Display calculated values or risk indicators

### Plugin Props

Enrollment plugins receive the following props:

| Prop | Type | Description |
|------|------|-------------|
| `teiId` | `string` | The tracked entity instance ID |
| `programId` | `string` | The program ID |
| `enrollmentId` | `string` | The enrollment ID |
| `orgUnitId` | `string` | The organization unit ID |
| `navigate` | `function` | Function to navigate to other pages |

### Getting Started

Use the starting point template in `enrollment-plugins/01-starting-point/` to begin.

### Assignments

Work through the assignments in `enrollment-plugins/assignments/`:

1. **Assignment 1**: Fetch and display tracked entity attributes
2. **Assignment 2**: Render attributes in a DataTable
3. **Assignment 3**: Navigate to create new events
4. **Assignment 4**: Use the Data Store for configuration
5. **Assignment 5**: Toggle configuration with mutations
6. **Assignment 6**: Restrict functionality based on user permissions

## Dashboard Plugins

### What are Dashboard Plugins?

Dashboard plugins are custom widgets that can be added to DHIS2 dashboards. They allow you to create custom visualizations and interactive elements.

### Key Differences from Enrollment Plugins

- Dashboard plugins use `type: 'DASHBOARD'` in `d2.config.js`
- They receive different props (dashboard context instead of enrollment context)
- They must be built and uploaded to DHIS2 before use

### Getting Started

Use the starting point template in `dashboard-plugins/01-starting-point/` to begin.

### Assignments

Work through the assignment in `dashboard-plugins/assignment-1.md`.

## Resources

- Solution code is available in the `02-solution/` folders
- DHIS2 UI component documentation: https://developers.dhis2.org/demo/
- Tracker API documentation: https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/tracker.html

## Tips

- Use the browser developer tools to inspect props and API responses
- The `useApiDataQuery` hook simplifies data fetching with automatic caching
- Test your plugins with different user roles to ensure proper access control

