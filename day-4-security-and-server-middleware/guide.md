# Day 4 - Security & Server Middleware

## Overview

Today we will learn about security considerations when building plugins and how to create server middleware to safely interact with external systems and perform operations that require elevated privileges.

## Learning Objectives

By the end of this day, you will be able to:

1. Understand the security model of DHIS2 plugins
2. Create server middleware using Node.js/Express
3. Configure DHIS2 routes to connect plugins with middleware
4. Implement token-based authentication for middleware
5. Fetch data from DHIS2 using Personal Access Tokens
6. Use the Data Store for dynamic configuration

## Why Server Middleware?

Plugins run in the browser and have limited access to:
- External APIs (due to CORS restrictions)
- Sensitive credentials
- Operations requiring elevated privileges

Server middleware solves these problems by:
- Acting as a proxy between the plugin and external systems
- Securely storing and using credentials
- Performing data transformations before sending to the client
- Implementing additional access control logic

## DHIS2 Routes

DHIS2 Routes allow you to connect your plugins to external services through the DHIS2 server. This:
- Bypasses CORS restrictions
- Allows the DHIS2 server to add authentication headers
- Provides a secure way to communicate with middleware

### Configuring Routes

1. Open the Routes Manager app in DHIS2
2. Create a new route with:
   - A unique name (e.g., "is-under-treatment")
   - The URL of your middleware endpoint
   - Optional authentication headers

## Server Middleware Setup

### Basic Express Server

```javascript
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3005;

app.get('/api/endpoint/:id', async (req, res) => {
    const { id } = req.params;
    // Your logic here
    return res.json({ data: result });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

### Authentication

Always validate requests to your middleware:

```javascript
const authHeader = req.headers['authorization'];

if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized' });
}

const [scheme, token] = authHeader.split(' ');

if (scheme !== 'ApiToken' || token !== process.env.INTERNAL_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
}
```

## Assignments

Work through the assignments in `assignments/`:

1. **Assignment 1**: Set up and test the enrollment plugin
2. **Assignment 2**: Connect the plugin to middleware via DHIS2 routes
3. **Assignment 3**: Fetch data from DHIS2 in the middleware
4. **Assignment 4**: Filter and process enrollment data
5. **Assignment 5**: Secure the middleware with API tokens
6. **Assignment 6**: Use Data Store for dynamic program configuration

## Getting Started

### Plugin Setup
1. Navigate to `01-starting-point/day-4-enrollment-plugin/`
2. Run `npm install` and `npm start`

### Middleware Setup
1. Navigate to `01-starting-point/day-4-node-middleware/`
2. Copy the environment example file and configure it:
   ```bash
   cp .env.example .env
   ```
3. Edit the `.env` file and replace the placeholder values:
   - `PERSONAL_ACCESS_TOKEN`: Generate in DHIS2 (User Profile → Personal Access Tokens)
   - `INTERNAL_API_KEY`: Generate using `node generate-api-token.js`
4. Run `npm install` and `npm start`

## Security Best Practices

1. **Never expose sensitive tokens in the browser**
2. **Always validate authentication on every request**
3. **Use environment variables for secrets**
4. **Implement rate limiting for production**
5. **Log security-relevant events**
6. **Validate and sanitize all input**

## Resources

- Solution code in `02-solution/`
- Personal Access Token generation: User Profile app → Personal Access Tokens
- DHIS2 Routes documentation: https://docs.dhis2.org

## Tips

- Use `console.log` in your middleware to debug API responses
- Test your routes directly in the browser before using them in plugins
- Remember to restart the middleware after changing environment variables

