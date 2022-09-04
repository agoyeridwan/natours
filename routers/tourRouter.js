const express = require('express');
const router = express.Router();
const tourController = require('./../controller/tourController');
//tourRouter is a middleware function
// In param middleware, we get access to a fourth argument called the value
// router.param('id', tourController.checkId);
// tourController.checkBody();
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router.route('/:id').get(tourController.getTours);
module.exports = router;
