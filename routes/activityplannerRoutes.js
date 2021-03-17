const express = require('express');
const controller = require('../controllers/activityplannerControllers');
const router = express.Router();


router.get('/', controller.landing_page);
   
router.get('/activityplanner',controller.entries_list);

router.get('/new', controller.new_entry);

router.get('/fitness', controller.fitness_page);

router.get('/gael', controller.gaels_entries);





module.exports = router;