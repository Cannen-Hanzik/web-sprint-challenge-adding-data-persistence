const router = require('express').Router();
const db = require('./model');

const {
    checkUniqueResourceName
} = require('./resource-middlware');

router.get('/', (req, res, next) => {
    db.getAll()
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(next);
});

router.post('/', checkUniqueResourceName, (req, res, next) => {
    db.add(req.body)
        .then(newRsc => {
            res.status(201).json(newRsc[
                newRsc.length -1
            ])
        })
        .catch(next)
});

module.exports = router;