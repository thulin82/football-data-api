const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', require('./routes/index'));

const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
