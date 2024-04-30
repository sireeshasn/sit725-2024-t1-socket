var exports = require('express');

let router = exports.Router();
let controller = require('../controllers/controller');

router.post('/', (req, res) => {
    controller.postCat(req, res);
});

router.get('/', (req, res) => {
    controller.getAllCats(req, res);
});

router.delete('/', (req, res) => {
    controller.deleteCat(req, res);
});

module.exports = router;
