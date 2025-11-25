## Dashboard Files Widget

### Objective

Create a dashboard plugin that displays a list of downloadable files associated with the current dashboard. The plugin reads its configuration from the DHIS2 Datastore, allowing administrators to configure which files are available for each dashboard.

### Steps

1. Create a new dashboard plugin by using the `npm create @dhis2/app` command (or reuse a template from `day-3-enrollment-and-dashboard-plugins/dashboard-plugins/01-starting-point`)

2. Access the dashboard ID from the url. The url will contain the dashboard id as a query parameter.

3. Set up the Datastore configuration. Create a Datastore entry that maps dashboard IDs to their associated files:
   - Namespace: `dashboard-files` (or your preferred namespace)
   - Key: The dashboard ID
   - Value: An array of file objects with the following structure:
   ```json
   [
     {
       "url": "https://example.com/files/report.pdf",
       "fileName": "report.pdf",
       "displayName": "Monthly Report"
     },
     {
       "url": "https://example.com/files/guidelines.docx",
       "fileName": "guidelines.docx",
       "displayName": "Program Guidelines"
     }
   ]
   ```

4. Fetch the configuration from the Datastore using the DHIS2 Data Engine or fetch API:
   ```typescript
   const { data } = useApiDataQuery({
     queryKey: ['dashboard-files', dashboardId],
     query: {
       resource: 'dataStore/dashboard-files',
       id: dashboardId,
     }
   })
   ```

5. Build the UI to display the list of files with download links. Consider using DHIS2 UI components like `DataTable`, `Card`, or a simple list with download buttons.

6. Handle edge cases:
   - No configuration exists for the dashboard (404 response)
   - Empty file list
   - Loading and error states

7. Build and deploy the plugin:
   - Run `npm run build` to create the production bundle
   - Navigate to the App Management app in DHIS2
   - Upload the built zip file manually
   - Configure the plugin to appear on the desired dashboard(s)

### Hints

- Use `useApiDataQuery` to fetch Datastore data
- The dashboard ID is available via the url query parameter
- Handle the 404 case gracefully when no files are configured for a dashboard
- Consider adding icons based on file type (PDF, Excel, Word, etc.)

Difficulty: Medium

