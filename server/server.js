var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());
app.use(cors());

//mongodb
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected mother fucker'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

const abstracts = require('./routes/abstracts')
app.use('/api', abstracts)

app.listen(port, () => {
console.log("Server is running on " + port + "port");
});