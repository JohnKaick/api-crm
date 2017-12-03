const express = require('express');
const router = express.Router();

const ctrl = require('./../controllers/empresa')

router.get('/', async function (req, res, next) {
    try {
        const result = await ctrl.obterTodos()
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        const result = await ctrl.obter(req.params.id)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});

router.put('/', async function (req, res, next) {
    try {
        const result = await ctrl.cadastrar(req.body)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});

router.post('/:id', async function (req, res, next) {
    try {
        const result = await ctrl.editar(req.params.id, req.body)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});

router.delete('/:id', async function (req, res, next) {
    try {
        const result = await ctrl.deletar(req.params.id)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});


module.exports = router;
