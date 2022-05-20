const db = require('../../data/dbConfig');

module.exports = {
    checkProjectData (req, res, next) {
        if(!req.body.project_name) {
            next({
                message: 'Please enter project name',
                status: 404
            })
        } else {
            next();
        }
    }
};