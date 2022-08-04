const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const heroes = require('./routes/api/heroes');

app.use('/api/heroes', heroes);

//if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(__dirname + '/public/'));

///   app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
//}

const port = 51245;


app.listen(port, () => console.log(`Server started on port ${port}`));

