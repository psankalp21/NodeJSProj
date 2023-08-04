const express = require('express');
const routes = require('./src/routes/index')
const bodyParser = require('body-parser')
const app = express();
require('./swagger')(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

const port = 4000; //port change from 3000 to 4000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
