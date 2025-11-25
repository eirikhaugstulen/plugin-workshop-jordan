# Assignment 2

# Objective
Connect your plugin with your server middleware by using a DHIS2 route.

## Steps

1. Open the day-4-node-middleware folder
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the server middleware.
4. Add a new route to your DHIS2 instance by using the routes manager app.
   1. Call it "is-under-treatment"
   2. Set the URL to `http://{your-local-ip-address}:3005/api/is-under-treatment/**`
   3. Set the method to GET
   4. Do not add any authentication or headers yet.
5. Open up the capture app and test if the plugin can reach the server middleware.
6. It should return a `{ "isUnderTreatment": true }` response.