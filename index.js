const express = require('express')
const app = express()
const mongoose = require('mongoose');

const config = require('./config/database')

const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
  if(err){
    console.log('could not connect',err);
  } else {
    console.log(' connect: ' + config.db);
    // console.log(config.secret);
  }
});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

app.use(express.static(__dirname + '/client/dist/client'))


app.get('*', function (req, res) {
  //res.send('<h1>hello daniosh  wofdsfdfsdrld</h1>')
  res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
})

app.listen(8000,()=>{
    console.log('server is running');
});
