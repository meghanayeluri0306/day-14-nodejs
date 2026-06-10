//1 import the express library
const express = require('express');
//2 initialize the express application
const app = express();
//3 define the port number
const PORT = 3000;
//4 create a GET route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Welcome to Meghana Server!');
});
//5 create a GET route(A JSON API endpoint) for path/api/data
app.get('/api/data', (req, res) => {
    const mockUsers = [
        {
            "id": "1",
            "name":"Meghana",
            "age": 22,
            "email": "meghana@gmail.com"
        },
        {
        "id": "2",
        "name":"Kranthi",
        "age": 27,
        "email": "kranthi@gmail.com"
    },
    {
        "id": "3",
        "name":"Sravani",
        "age": 24,
        "email": "Sravani@gmail.com"
    }
];
    res.json(mockUsers);
});
//6 start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/about', (req, res) => {
    res.send('Welcome to Meghana API Server');
});
