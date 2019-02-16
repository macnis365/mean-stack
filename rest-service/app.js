const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser);
app.use(
    bodyParser.urlencoded({
        extended: true
    }));


/*app.get("/url", (req, res, next) => {
    res.json(["Tony", "Roger", "Natasha", "Thor", "Hawkeye", "Banner"]);
});*/

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    });
});

var server = app.listen(port, () => {
    console.log("server running on port 3000");
});
