let client = require('../dbConnection');

let collection = client.db("Text1").collection('Cat');

function postCat(cat, callback) {
    collection.insertOne(cat, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getAllCats(callback) {
    collection.find({}).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function deleteCat(cat, callback) {
    collection.deleteOne(cat, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

module.exports = {postCat, getAllCats, deleteCat}