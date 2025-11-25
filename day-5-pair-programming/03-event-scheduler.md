## Event Scheduler

### Objective

Create a plugin that allows users to duplicate events a certain amount of times in the future based on a given interval.

### Steps

1. Create a new event plugin by using the `npm create @dhis2/app` command (or reuse a template)
2. Use the provided ids to fetch the data required for the widget. This could be either tracked entity, enrollment or event data.
3. Allow the user to select the event to duplicate
4. Select the amount of times to duplicate the event
5. Select the interval between the events
   1. This could be X days etc.
   2. Tip: use the `date-fns` library to calculate the dates.
6. Create a button to trigger the duplication of the event
7. Display a success or an error based on the result.

Difficulty: Medium