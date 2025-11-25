## Lab Request Card

### Objective

Create a card that displays some information about a lab request without giving access to the entire record.

### Steps

1. Create a new enrollment plugin by using the `npm create @dhis2/app` command (or reuse a template)
2. Use the provided ids to fetch the data required for the card. This could be either tracked entity, enrollment or event data.
3. Create a new middleware that will be responsible for fetching the lab request data from DHIS2 and only returning the necessary data to the client.
   1. Make sure to secure the middleware by using a token based authentication.
   2. See the guide in the day-4-security-and-server-middleware assignment for more information.
4. Build the UI to display the lab request data in a card.
5. Handle edge cases:
   1. No lab request data found
   2. Error fetching lab request data
   3. Loading state
6. Build and deploy the plugin:
   1. Run `npm run build` to create the production bundle
   2. Navigate to the App Management app in DHIS2
   3. Upload the built zip file manually
   4. Configure the plugin to appear on the desired page(s)

Difficulty: Medium+