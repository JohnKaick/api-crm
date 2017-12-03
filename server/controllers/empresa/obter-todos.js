const mongoose = require('mongoose')
const Empresa = mongoose.model('Empresa')


module.exports = async function () {

    let empresas = await Empresa.find()

    return empresas

}
