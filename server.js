'use strict';
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

mongoose.connect('mongodb://db/test');
mongoose.Promise = global.Promise;

const Post = mongoose.model('Post', {
	title: String
});

app.get('/', (req, res) => {
  let post = new Post({ title: 'Panceta' });

  post.save().then(() => {
  	res.send('Post has been saved');
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
