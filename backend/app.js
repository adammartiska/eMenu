const express = require('express');
const path = require('path');

const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes'));

const db = require('./models');

db.sequelize.sync({ force: true });

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let server = app.listen(4000, () => {
    console.log('Listening on port ' + server.address().port);
});