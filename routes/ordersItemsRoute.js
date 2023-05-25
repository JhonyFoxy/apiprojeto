const express = require('express');

const router = express.Router();

const ordersItemsController = require('../controllers/ordersItems');

router.get('/', (req, res) => {
    ordersItemsController.getAll(req, res)
});

router.get('/:id', (req, res) => {
    ordersItemsController.get(req, res)
})

router.post('/', (req, res) =>{
    ordersItemsController.create(req, res)

})

router.put('/:id', (req, res) => {
    ordersItemsController.update(req, res)
})

router.delete('/:id', (req, res) => {
    ordersItemsController.delete(req, res)
});

module.exports = router;