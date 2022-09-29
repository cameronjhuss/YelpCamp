const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReviews, isLoggedIn, isReviewAuthor } = require('../middleware');
const Campground = require('../models/campground');
const Review = require('../models/review');
const reviews = require('../controllers/reviews')
const catchAsync = require('../utilities/catchAsync');
const ExpressError = require('../utilities/ExpressError');



//adds reviews and validates the review.
router.post('/', isLoggedIn, validateReviews, catchAsync(reviews.createReview))
//DELETES REVIEW
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;