const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const URL = require('./models/Url');

mongoose
  .connect("mongodb://127.0.0.1:27017/URL", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

  
  app.post('/s', async (req,res) => {
    const {url,shortUrl}= req.body;
    try{
      const urlDoc = await URL.create({
        url,
        shortUrl,
      });
      res.status(200).send();
    } catch(e) {
      console.log(e);
      res.status(400).send();
    }
  });

  app.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
      const doc = await URL.findOne({ shortUrl: id});
      if (doc) {
        return res.json(doc);
      } else {
        return res.status(404).json('No Such URL found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  })

app.listen(4000, () => {});
