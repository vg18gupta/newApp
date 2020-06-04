//You need to replace with your username and password(MONGODB ATLAS)
//Also you need to put your api key for fetching news in client folder
var express = require('express')
var cors = require('cors')
var path = require('path');
var bodyParser = require('body-parser')
var app = express()


const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://vishal:123@cluster0-j0yto.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://vishal:123@cluster0-j0yto.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
})


var Users = require('./routes/User')
app.use('/uploads',express.static('uploads'))
app.use('/users', Users)

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}





app.listen(port, function() {
    console.log('Server is running on port: ' + port)
})