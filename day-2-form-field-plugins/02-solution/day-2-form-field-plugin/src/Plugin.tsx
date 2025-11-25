import React, { useState } from 'react';
import { Button, Input } from '@dhis2/ui';
import { IFormFieldPluginProps } from '../types/form-field-props';
import classes from './Plugin.module.css';

export default function Plugin({ values, setFieldValue }: IFormFieldPluginProps) {
    const [personId, setPersonId] = useState('');

    // Assignment 3: Concatenate first name and last name into full name
    const handleConcatenate = () => {
        const firstName = values['firstName'] || '';
        const lastName = values['lastName'] || '';
        const fullName = `${firstName} ${lastName}`.trim();

        setFieldValue({
            fieldId: 'fullName',
            value: fullName
        });
    };

    // Assignment 4 & 5: Fetch data from external civil registry API
    const handleFetchData = async () => {
        if (!personId) {
            console.log('Please enter a person ID');
            return;
        }

        try {
            const response = await fetch(`https://www.jordan-workshop.dev/api/civil-registry/${personId}`);
            const { data } = await response.json();

            // Log the data to understand the structure
            console.log('Fetched data:', data);

            // Write fetched data to form fields
            // Adjust these field IDs based on your plugin configuration and API response
            if (data.firstName) {
                setFieldValue({
                    fieldId: 'firstName',
                    value: data.firstName
                });
            }
            if (data.lastName) {
                setFieldValue({
                    fieldId: 'lastName',
                    value: data.lastName
                });
            }
            if (data.firstName && data.lastName) {
                setFieldValue({
                    fieldId: 'fullName',
                    value: `${data.firstName} ${data.lastName}`
                });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className={classes.fieldContainer}>
            <div className={classes.labelContainer}>
                <span className={classes.label}>Civil Registry Lookup</span>
            </div>
            <div className={classes.inputContainer}>
                <Input
                    className={classes.input}
                    value={personId}
                    onChange={({ value }) => setPersonId(value ?? '')}
                    placeholder="Enter person ID"
                />
                <Button onClick={handleFetchData}>
                    Fetch Data
                </Button>
                <Button onClick={handleConcatenate}>
                    Generate Full Name
                </Button>
            </div>
        </div>
    );
}
