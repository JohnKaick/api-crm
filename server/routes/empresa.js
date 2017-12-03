const express = require('express');
const router = express.Router();

const ctrl = require('./../controllers/empresa')

router.get('/obter-todos', async function (req, res, next) {
    try {
        const result = await ctrl.obterTodos()
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});

router.get('obter/:id', async function (req, res, next) {
    try {
        const result = await ctrl.obter(req.params.id)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});

router.put('cadastrar/:id', async function (req, res, next) {
    try {
        const result = await ctrl.cadastrar(req.body)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});

router.post('editar/:id', async function (req, res, next) {
    try {
        const result = await ctrl.editar(req.params.id, req.body)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});

router.delete('deletar/:id', async function (req, res, next) {
    try {
        const result = await ctrl.deletar(req.params.id)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});


module.exports = router;
