const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3005;

const PERSONAL_ACCESS_TOKEN = process.env.PERSONAL_ACCESS_TOKEN;
const INTERNAL_API_KEY = process.env.INTERNAL_API_KEY;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

// Assignment 5: Validate API token from DHIS2 route
app.get('/api/is-under-treatment/:id', async (req, res) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const [scheme, token] = authHeader.split(' ');

    if (scheme !== 'ApiToken' || !token || token !== INTERNAL_API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.params;
    const { programId } = req.query;

    // Assignment 6: Fetch sensitive programs from datastore
    const dataStoreResponse = await fetch('http://localhost:8080/api/dataStore/isUnderTreatment/sensitivePrograms', {
        headers: {
            Authorization: `ApiToken ${PERSONAL_ACCESS_TOKEN}`,
        },
    });

    let validProgramIds = undefined;

    if (dataStoreResponse.ok) {
        const sensitiveProgramsData = await dataStoreResponse.json();
        const { sensitivePrograms } = sensitiveProgramsData;
        validProgramIds = sensitivePrograms.filter(programId => typeof programId === 'string');
    }

    // Assignment 3: Fetch tracked entity from DHIS2
    const response = await fetch(`http://localhost:8080/api/tracker/trackedEntities/${id}?fields=*`, {
        headers: {
            Authorization: `ApiToken ${PERSONAL_ACCESS_TOKEN}`,
        },
    });

    if (!response.ok) {
        return res.status(response.status).json({
            error: response.statusText,
            message: 'Failed to fetch data from the API'
        });
    }

    const data = await response.json();

    // Assignment 4 & 6: Check enrollments in sensitive programs
    const enrollments = data.enrollments || [];
    const enrollmentsInSensitivePrograms = enrollments.filter(
        enrollment => validProgramIds ? validProgramIds.includes(enrollment.program) : true && enrollment.program !== programId
    );

    return res.json({ 
        isUnderTreatment: enrollmentsInSensitivePrograms.length > 0 
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
