'use strict'

const mongoose = require('mongoose')
const Project = require('../models/project-model')

const { param } = require('../routes/project-routes')
const { find, findByIdAndDelete, findByIdAndRemove, model } = require('../models/project-model')
const fs = require('fs')
const path = require('path');
mongoose.set('useFindAndModify', false);

var controller = {
    home: function(req,res){
        return res.status(200).send({
            message: 'soy la home'
        })
    },
    test: function(req,res){
        return res.status(200).send({
            message: 'soy la test'
        })
    },
    saveProject: function(req, res){
        var project = new Project()

        var params = req.body
        project.name = params.name
        project.description = params.description
        project.category = params.category
        project.year = params.year
        project.langs = params.langs
        project.image = null

        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: "error al guardar el proyecto"})

            if(!projectStored) return res.status(404).send({message: "no se ha podido guardar el mensaje"})

            return res.status(200).send({project: projectStored})
        })
    },
    getProject: function(req, res){
		var projectId = req.params.id;

		if(projectId == null) return res.status(404).send({message: 'El proyecto no existe.'});

		Project.findById(projectId, (err, project) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!project) return res.status(404).send({message: 'El proyecto no existe.'});

			return res.status(200).send({
				project
			});

		});
	},
    getAllProjects: function(req, res){
        Project.find({}).sort('year').exec((err, projects) => {
            if (err) return res.status(500).send({message: 'error al devolver los datos'})
            if (!projects) return res.status(404).send({message: 'no hay proyectos'})

            return res.status(200).send({projects})
        })
    },
    updateProject: function(req, res){
        var projectId = req.params.id
        var update = req.body

        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
            if (err) return res.status(500).send({message: 'error al intentar actualizar los datos'})
            if (!projectUpdated) return res.status(404).send({message: 'no existe el proyecto solicitado'})
            return res.status(200).send({project: projectUpdated})
        })
    },
    deleteProject: function(req, res){
        var projectId = req.params.id
        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send({message: 'error al intentar eliminar proyecto'})

            if (!project) return res.status(404).send({message: 'no existe el proyecto solicitado a eliminar'})

            var pathToDelete ='./uploads/' + project.image
            fs.unlink(pathToDelete, (err) => {
                if (err) return res.status(500).send({message: 'error al intentar eliminar proyecto'})
                return res.status(200).send({message: 'imagen borrada'})
            })
        })
       Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
            if (err) return res.status(500).send({message: 'error al intentar eliminar proyecto'})

            if (!projectRemoved) return res.status(404).send({message: 'no existe el proyecto solicitado a eliminar'})

            return res.status(200).send({
                project: projectRemoved
            })
        })
    },
    uploadFile: function(req, res){
        var projectId = req.params.id
        var fileName = 'imagen no subida...'

        if(req.files){
            var filePath = req.files.image.path
            var fileSplit = filePath.split('\\')
            var fileName = fileSplit[1]
            var extSplit = fileName.split('\.')
            var fileExt = extSplit[1]

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif' == fileExt == 'svg'){
                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
                    if (err) return res.status(500).send({message: 'error al intentar subir el archivo'})

                    if (!projectUpdated) return res.status(404).send({message: 'no existe el archivo'})

                    return res.status(200).send({
                        project: projectUpdated
                    })
                })
            }else{
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({message: 'la extension no es valida'})
                })
            }

        }else{
            return res.status(200).send({
                message: fileName
            })
        }
    },
    getImageFile: function(req, res){
        var file = req.params.image;
        var path_file = './uploads/' + file
        fs.exists(path_file, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file))
            }else{
                return res.status(200).send({message:'no existe la foto'})
            }
        })
    },
}

module.exports = controller

