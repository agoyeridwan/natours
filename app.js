const fs = require('fs');
const express = require('express');
const app = express();
const tourRouter = require('./routers/tourRouter');
app.use(express.json());
app.use('/api/v1/tours', tourRouter);
//Getting all tours
// app.get('/api/v1/tours', (req, res) => {
//   console.log(tours.length);

//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: { tours },
//   });
// });
// //Posting to the tours API
// app.post('/api/v1/tours', (req, res) => {
//   const id = tours[tours.length - 1].id + 1;
//   const realData = Object.assign({ id }, req.body);
//   tours.push(realData);
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       console.log('File done uploading');
//     }
//   );
//   res.status(201).json({
//     status: 'Success',
//     data: {
//       data: realData,
//     },
//   });
// });
module.exports = app;
