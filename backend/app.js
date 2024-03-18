const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentDetailsRouter = require('./src/routes/studentDetails.js');
const InitiateMongoServer =require('./src/config/db.js')
const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use('/students', studentDetailsRouter);
InitiateMongoServer()
// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

app.listen(5050, () => {
  console.log('Listening on port 5050');
});
