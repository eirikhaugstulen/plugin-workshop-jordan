## Civil Registry Integration

### Objective

Create a plugin that allows users to fetch data from the civil registry and write it to the form.

### Steps

1. Create a new form field plugin by using the `npm create @dhis2/app` command (or reuse a template)
2. Create a new middleware that will be responsible for fetching the civil registry data from DHIS2 and only returning the necessary data to the client.
   1. Make sure to secure the middleware by using a token based authentication.
   2. See the guide in the day-4-security-and-server-middleware assignment for more information.
3. Build a UI that renders an Id input field and a button to fetch the data.
4. When the button is clicked, the middleware should be called and the data should be written to the form.
   1. Make sure to run the API call through the routes API and not directly to the external source.
5. When the data is fetched, the first name, last name and full name should be written to the form.
6. Handle edge cases:
   1. No data found
   2. Error fetching data
   3. Loading state
7. Build and deploy the plugin:
   1. Run `npm run build` to create the production bundle
   2. Navigate to the App Management app in DHIS2
   3. Upload the built zip file manually
   4. Configure the plugin to appear on the desired page(s)

Difficulty: Medium+