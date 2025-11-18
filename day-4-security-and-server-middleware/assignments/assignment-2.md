# Assignment 2

# Objective
Connect your plugin with your server middleware by using a DHIS2 route.

## Steps

1. Clone the express server middleware repository and follow the instructions in the README.md file to get it running.
2. Use the script guide below to create a new DHIS2 route
   1. Replace the localhost with your local machine's IP address
3. Open up the capture app and test if the plugin can reach the server middleware.


# How to create a new DHIS2 route

```bash
ipconfig | findstr /i "IPv4"
```

Then run the following command in your terminal:
```bash
curl -v -X POST http://localhost:8080/api/routes -u system:System123 -H "Content-Type: application/json" -d "{\"name\":\"Is under treatment\",\"code\":\"is-under-treatment\",\"disabled\":false,\"url\":\"http://172.25.22.59:3005/api/is-under-treatment/**\"}"
```