# Assignment 6

## Objective

Not all programs are sensitive. We want to add a configuration option in the data store that tells the external system what programs to count.

## Steps

1. Add a new option in the data store application called `isUnderTreatment`
2. Give it a key of `sensitivePrograms`
3. The sensitive programs should be an array of program IDs.
4. The node middleware should fetch this option from the data store and validate that all entries in this array are strings.
5. Fetch the enrollment data for the tracked entity and filter out the enrollments that are not in the sensitive programs.
6. If the total length of the array after filtering is >0, then return isUnderTreatment true, if it is 0, then return isUnderTreatment false.
7. Enroll the same tracked entity in the multiple programs, both sensitive and non-sensitive.
8. Test the functionality by changing the sensitive programs array in the data store and see the response from the server middleware.

## End result

```javascript
const dataStoreResponse = await fetch('http://localhost:8080/api/dataStore/isUnderTreatment/sensitivePrograms', {
    headers: {
        authorization: `ApiToken ${PERSONAL_ACCESS_TOKEN}`,
    },
});

if (!dataStoreResponse.ok) {
    return res.status(500).json({ error: 'Failed to fetch sensitive programs' });
}

const dataStoreData = await dataStoreResponse.json();

const sensitivePrograms = dataStoreData.sensitivePrograms;

const validProgramIds = sensitivePrograms.filter(programId => typeof programId === 'string');

// Fetch enrollments for the tracked entity and make sure you have the data

const enrollmentsInSensitivePrograms = enrollments.filter(enrollment => validProgramIds.includes(enrollment.programId));

return res.status(200).json({ isUnderTreatment: enrollmentsInSensitivePrograms.length > 0 });
```