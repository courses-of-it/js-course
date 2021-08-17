'use strict'

const express = require('express')
const ProjectController = require('../controllers/project')

const router = express.Router()
const multipart = require('connect-multiparty')
var multipartyMiddelware = multipart({uploadDir: './uploads'})


router.get('/home', ProjectController.home)
router.post('/test', ProjectController.test)
router.post('/save-project', ProjectController.saveProject)
router.get('/find-project/:id?', ProjectController.getProject)
router.get('/getAllProjects', ProjectController.getAllProjects)
router.put('/updateProject/:id', ProjectController.updateProject)
router.delete('/deleteProject/:id', ProjectController.deleteProject)
router.post('/uploadImage/:id', multipartyMiddelware, ProjectController.uploadFile)
router.get('/getImage/:image', ProjectController.getImageFile)



module.exports = router