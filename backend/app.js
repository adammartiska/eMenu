let express = require('express');
const path = require('path');

const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes'));

let server = app.listen(4000, () => {
    console.log('Listening on port ' + server.address().port);
});