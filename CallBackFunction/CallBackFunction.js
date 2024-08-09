//Example 1: Simple Callback

/*
function greet(name) {
    console.log('Hello, ' + name + '!');
}

function processUserInput(callback) {
    const name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greet);
*/


//Example 2: Asynchronous Callback
//Callbacks are especially useful in asynchronous operations. Here's an example using setTimeout:

function displayMessage() {
    console.log('This message is displayed after 3 seconds');
}

setTimeout(displayMessage, 3000);

//Example 3: Callback with Data Fetching (Using Axios in React)

//In a React application, you might use a callback when fetching data with Axios and then performing some action once the data is fetched.

/*
import React, { useEffect } from 'react';
import axios from 'axios';

function fetchData(callback) {
    axios.get('https://api.example.com/data')
        .then(response => {
            callback(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the data!', error);
        });
}

function App() {
    useEffect(() => {
        fetchData((data) => {
            console.log('Fetched data:', data);
            // You can set the fetched data to state or perform other actions here
        });
    }, []);

    return (
        <div>
            <h1>Data Fetching Example</h1>
        </div>
    );
}

export default App;

*/

//https://chatgpt.com/c/fdb5048a-a7be-4fa2-aef1-a819c9d3848b