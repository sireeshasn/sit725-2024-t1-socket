let collection = require('../models/cat')

const postCat = (req, res) => {
    let cat = req.body
    collection.postCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'post cat success' });
        }
    });
}

const getAllCats = (req, res) => {
    collection.getAllCats((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get cat success' });
        }
    });
}

const deleteCat = (req, res) => {
    let cat = req.body
    collection.deleteCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'delete cat success' });
        }
    });
}

module.exports = {postCat, getAllCats, deleteCat}
