const mongoose = require('mongoose')
const Empresa = mongoose.model('Empresa')


module.exports = async function (empresaId) {

    await Empresa.findByIdAndRemove(empresaId)

    return { success: true }

}
