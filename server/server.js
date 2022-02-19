const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
app.use(cors())

let data = require('./data')

// READ
// this api end-point of an API returns JSON data array
app.get('/', function (req, res) {
    res.status(200).json(data);
});

// READ
// this api end-point returns an object from a data array find by id
// we get `id` from URL end-points
app.get('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// CREATE
// this api end-point add new object to item list
// that is add new object to `data` array
app.post('/', function (req, res) {
    // get itemIds from data array
    let itemIds = data.map(item => item.id);

    // create new id (basically +1 of last item object)
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;


    // create an object of new Item
    let newItem = {
        id: newId, // generated in above step
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
    };

    // push new item object to data array of items
    data.push(newItem);

    // return with status 201
    // 201 means Created. The request has been fulfilled and
    // has resulted in one or more new resources being created.
    res.status(201).json(newItem);
});

// UPDATE
// this api end-point update an existing item object
// for that we get `id` and `title` from api end-point of item to update
app.put('/:id', function (req, res) {
    console.log(req);
    // get item object match by `id`
    // let found = data.find(function (item) {
    //     return item.id === parseInt(req.params.id);
    // });

    // check if item found
    // if (found) {
        let updated = {
            id: req.body.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender
        };

        // find index of found object from array of data
        // let targetIndex = data.indexOf(5);

        // replace object from data list with `updated` object
        data.splice(5, 1, updated);

        // return with status 204
        // success status response code 204 indicates
        // that the request has succeeded
        res.sendStatus(204);
    // } else {
    //     res.sendStatus(404);
    // }
});

// DELETE
// this api end-point delete an existing item object from
// array of data, match by `id` find item and then delete
app.delete('/:id', function (req, res) {
    // find item from array of data
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        // if item found then find index at which the item is
        // stored in the `data` array
        let targetIndex = data.indexOf(found);

        // splice means delete item from `data` array using index
        data.splice(targetIndex, 1);
    }

    // return with status 204
    // success status response code 204 indicates
    // that the request has succeeded
    res.sendStatus(204);
});

// module.exports is an object included in every JS file of Node.js
// application, whatever we assign to module.exports will be exposed as a module.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })