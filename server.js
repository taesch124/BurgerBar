const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const burgerController = require('./burger/controllers/burgers-controller');

const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", handlebars({ 
    defaultLayout: "main",
    layoutsDir: path.join('burger/views/layouts')
}));

app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'burger/views'));

app.use('/', burgerController);

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});