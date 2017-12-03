const mongoose = require('mongoose')
const Empresa = mongoose.model('Empresa')


module.exports = async function (empresaId) {

    let empresa = await Empresa.findById(empresaId)

    return empresa

}
