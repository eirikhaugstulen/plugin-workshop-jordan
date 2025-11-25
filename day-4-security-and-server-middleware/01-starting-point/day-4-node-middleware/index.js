const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3005;

const PERSONAL_ACCESS_TOKEN = process.env.PERSONAL_ACCESS_TOKEN;
const INTERNAL_API_KEY = process.env.INTERNAL_API_KEY;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
});

app.get('/api/is-under-treatment/:id', async (req, res) => {
    const { id } = req.params;
    const { programId } = req.query;

    return res.json({
        isUnderTreatment: true,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});