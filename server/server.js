const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();
const port = process.env.port || 3001;

const { User } = require('./models/user');
const { Book } = require('./models/book');

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/api/getbook', (req, res) => {
  let id = req.query.id;
  Book.findById(id, (err, doc) => {
    if(err) return res.status(400).send(err);
    res.status(200).send(doc);
  });
});
app.post('/api/book', (req, res) => {
  const book = new Book(req.body);

  book.save((err, doc) => {
    if(err) return res.status(400).send(err);
    res.status(200).json({
      post: true,
      bookId: doc._id
    })
  })
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});