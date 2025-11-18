# Assingment 3

## Objective

Extend the `/api/is-under-treatment/:id` endpoint. We want to fetch the enrollments linked to the tracked entity from DHIS2.

## Steps

1. Add a fetch() call inside the endpoint. 
   1. This endpoint will make a request to `http://localhost:8080/api/tracker/trackedEntities/{id}`
   2. To be able to authenticate your request, you will have to either add a basic username and password, or even better, use a personal access token.
2. Open up the User Profile app with the admin user and find the personal access token tab.
3. Generate a new personal access token.
   1. It should be a "Server / script context" token.
   2. Put in a name and an expiration time.
   3. Copy the token.
4. Add the token to the .env file in your server middleware repository.
5. Restart the server middleware.
6. Use the token to authenticate your request.
7. Console log the response.


# What should the request look like?

```tsx
const response = await fetch(`http://localhost:8080/api/tracker/trackedEntities/${id}?fields=*`, {
    headers: {
        Authorization: `ApiToken ${PERSONAL_ACCESS_TOKEN}`,
    },
});

if (!response.ok) {
    return res.status(response.status).json({
        error: response.statusText
        message: 'Failed to fetch data from the API'
    });
}

const data = await response.json();

console.log(data);
```