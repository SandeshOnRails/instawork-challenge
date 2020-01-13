# instawork-challenge
Take home Coding Challenge - Instawork

<h1> Assignment </h1>

Problem:

The example JSON data below shows iPhone models and their details.  Write a program to process and format this data using a data structure with properties: "name", "color", "price", "storage", "rating", and "url".  Once you’ve processed the data sort it based on the “price" property in ascending order and return the final output. For sorting the raw data, please select any sorting technique and implement it.

Example Input JSON Data:
[
[“iPhone X”, “White”, “$799”, “256GB”, “3.5 stars”, “https://www.amazon.com/iPhone_X_White”],
[“iPhone 11”, “Rose Gold”, “$1099”, “256GB”, “4 stars”, “https://www.amazon.com/iPhone_11_Rose_Gold”],
[“iPhone 11”, “Black”, “$1099”, “256GB”, “4 stars”, “https://www.amazon.com/iPhone_X_Black”],
[“iPhone 11”, “White”, “$999”, “128GB”, “3.75 stars”, “https://www.amazon.com/iPhone_X_White”],
[“iPhone 11”, “Black”, “$999”, “128GB”, “3.75 stars”, “https://www.amazon.com/iPhone_X_Black”],
[“iPhone X”, “Black”, “$799”, “256GB”, “3.5 stars”, “https://www.amazon.com/iPhone_X_Black”]
]

Output JSON Data: Output should include the new data structure and be sorted in ascending order of price.

<h1> Instructions to run </h1>

- clone repository
- point cwd to the project root
- run command: npm test

<h1> Results </h1>
 Console result of Unit Test with be displayed
 
 <h1> Solution </h1>
 
- Read JSON text file asynchronously through NodeJs inbuilt filesystem library from the project root, and parsed JSON to JS
- Populated Phone Data Structure consiting of field, name, color, price, storage, rating, and url and created an array of the   Phone DS
- Passed the array of objects to quick sort function implemantation.
- Evaluated and sorted each object by it's price, by parsing the string price '$799' into a Number by replacing the occurence of '$' with ''
- Wrote the result output from the quicksort function to output_json.txt file to the project root asynchronously.
