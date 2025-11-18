# Assignment 5

## Objective

We need to make sure that only trusted actors can run this external endpoint. The only trusted actor for this case should be DHIS2. Let's add an API token the the route configuration and only allow requests with this token to be processed.

## Steps

1. Create a new API token by using the `generate-api-token.js` script.
   1. Run it by running `node generate-api-token.js`
2. Copy the token.
3. Open the environment variables file and add the token to the INTERNAL_API_KEY environment variable.
4. Restart the server middleware.
5. Test the token by making a request to the server middleware in your browser.
   1. Go to the `http://localhost:3005/api/is-under-treatment/123` endpoint.
   2. It should error with a 401 Unauthorized response.
6. Open the routes manager application and add the token to the route configuration.
7. Open the server middleware application
8. Add some logic that extracts the token header and validates that it is the same as the INTERNAL_API_KEY environment variable. See the guide below.
9. Test the token by making a request to the server middleware in your browser.
   1. Go to the `http://localhost:3005/api/is-under-treatment/123` endpoint.
   2. It should return an unauthorized response.¨
10. Do the same through the route / plugin
    1.  The request is approved


## How to extract the token header

The token header is a custom ApiKey header. You can extract it by using the `req.headers['authorization']` property.

If there is no authorization header, you should return a 401 Unauthorized response immediately.

Extract the name and token by using the split method.

```javascript
const [name, token] = req.headers['authorization'].split(' ');
```

If the name is not 'ApiKey' or the token is not the same as in the Environment variable, also return a 401 Unauthorized response.

## End result 

```javascript
const authHeader = req.headers['authorization'];

if (!authHeader) {
   return res.status(401).json({ error: 'Unauthorized' });
}

const [scheme, token] = authHeader.split(' ');

if (scheme !== 'ApiToken' || !token || token !== INTERNAL_API_KEY) {
   return res.status(401).json({ error: 'Unauthorized' });
}
```
