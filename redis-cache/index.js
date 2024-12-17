const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(routes);
app.listen(PORT, () => console.log('App started at PORT ', PORT));