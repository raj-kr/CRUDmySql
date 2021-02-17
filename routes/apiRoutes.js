const router = require('express').Router();
const db = require('../models');

router.post('/new', async (req, res) => {
    const response = await db.Todo.create({ text: req.body.text });
    if (response) {
        res.send(response);
    }
});

router.get('/all', async (req, res) => {
    const response = await db.Todo.findAll();
    if (response) {
        res.send(response);
    }
});

router.get('/find/:id', async (req, res) => {
    const response = await db.Todo.findAll({
        where: {
            id: req.params.id
        }
    });
    if (response) {
        res.send(response);
    }
});

router.delete('/delete/:id', async (req, res) => {
    const response = await db.Todo.destroy({
        where: {
            id: req.params.id
        }
    });
    if (response) {
        res.send('Deleted');
    }
});

router.put('/edit', async (req, res) => {
    const response = await db.Todo.update(
        { text: req.body.text },
        { where: { id: req.body.id } }
    );
    if (response) {
        res.send(response)
    }
});


module.exports = router;