const express = require('express');
const project = require('./model');
const { checkProjectData } = require('./project-middlware');

const router = express.Router();

router.get('/', async (req, res, next) => {
    await project.getAll()
        .then(projects => {
            projects.map(project => {
                project.project_completed === 0 ?
                project.project_completed = false
                    : project.project_completed = true
            })
            res.status(200).json(projects)
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    project.add(req.body)
        .then(newPrj => {
            if (newPrj[newPrj.length-1].project_completed == 0){
                newPrj[newPrj.length-1].project_completed = false;
                res.status(201).json(newPrj[newPrj.length-1]);
            } else {
                newPrj[newPrj.length-1].project_completed = true;
                res.status(201).json(newPrj[newPrj.length-1]);
            }
        })
        .catch(next);
});

module.exports = router;