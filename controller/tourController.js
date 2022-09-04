const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/./../dev-data/data/tours-simple.json`, 'utf-8')
);
// console.log(tours);

exports.getAllTours = (req, res) => {
  // console.log(req.requestTIme);
  res.status(200).json({
    status: 'success',
    //   requestedAt: req.requestTIme,
    results: tours.length,
    data: {
      tours,
    },
  });
};
exports.getTours = (req, res) => {
  const id = +req.params.id;
  console.log(id);

  const newData = tours.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      newData,
    },
  });
};
exports.createTour = (req, res) => {
  const id = tours[tours.length - 1].id + 1;
  const realData = Object.assign({ id }, req.body);
  tours.push(realData);
  fs.writeFile(
    `${__dirname}/./../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      console.log('File done uploading');
    }
  );
  res.status(201).json({
    status: 'Success',
    data: {
      data: realData,
    },
  });
};
