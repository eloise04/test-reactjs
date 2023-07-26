# Smartpush Test ReactJS

## Instructions
Based on the context of the algorithm use case, you should make a ReactJS mini app with the following guidelines.

### External data
We provide a json file at the path `public/api/mock-api/data.json` which simulates an API call return.

### Objective #1
On the home page, we would like display a table with following columns `id`, `firstname`, `lastname`, `age`, `city`, `address`.   
The content of the table will be enriched by the content of the data.json file.
You must use `fetch` method to load json file.

#### Confirm message
After loading json file, we would like display a message at the top of page, only one time and display it during 10 seconds.

#### Filter content table
Next objective is add a search bar above table to filter table based on `lastname` field.   
The filtering of the array starts as soon as a character is entered in the input and updates the array as it goes.
If there is no result, display a message below the table "No matching result".

### N.B
Remember, a pretty react component is a small component.   
A ReactJS application must be reactive.
For this use case, we do not attach great importance to the visual rendering.
