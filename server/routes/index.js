const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const authHandler = require('../handlers/authHandler');

const authController = require('../controllers/authController');
const companyController = require('../controllers/companyController');
const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');
const facadeController = require('../controllers/facadeController');
const photoPointController = require('../controllers/photoPointController');

//auth
router.post('/login', catchErrors(authController.login));

//user
router.post('/company/:id/users', authHandler, userController.createUser);

//company
router.post('/company', authHandler, catchErrors(companyController.createCompany));

//projects
router.get('/projects', authHandler, catchErrors(projectController.getProjectsByCompany));
router.post('/projects', authHandler, catchErrors(projectController.createProject));

//facades
router.post('/projects/:id/facades', authHandler, catchErrors(facadeController.createFacade));
router.get('/facades/:id', authHandler, catchErrors(facadeController.getFacadeById));

//photoPoint
router.get('/photoPoints/:id', authHandler, catchErrors(photoPointController.getPhotoPointById));
router.put('/photoPoints/:id/photoAnnotation', authHandler, catchErrors(photoPointController.updatePhotoAnnotation));

module.exports = router;