/*
 * A tiny message-of-the-day (MOTD) server
 */
const express = require('express');
const app = express();

app.use('/', express.static('client'));
app.use(express.json());

let motd = {};

app.post('/message', (req, res) => {
  motd = req.body;
  res.json(motd);
});

app.get('/message', (req, res) => {
  res.json(motd);
});

app.listen( 8080, (e) =>{
  console.log(`server ${e?"failed to start":"listening"}`);
});
