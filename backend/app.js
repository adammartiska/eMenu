let express = require('express');

let app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(require('./routes'));

let server = app.listen(4000, () => {
    console.log('Listening on port ' + server.address().port);
});