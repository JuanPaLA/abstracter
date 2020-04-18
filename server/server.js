var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
var app = express();
const path = require('path')

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

if(process.env.NODE_ENV === 'production')
//set static folder
app.use(express.static('client/build'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

app.listen(port, () => {
console.log("Server is running on " + port + "port");
});