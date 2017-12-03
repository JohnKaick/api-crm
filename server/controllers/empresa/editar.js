const mongoose = require('mongoose')
const Empresa = mongoose.model('Empresa')


module.exports = async function (empresaId, data) {

    let empresa = await Empresa.findByIdAndUpdate(empresaId, {
        $set: {
            nome: data.nome,
            cnpj: data.cnpj,
            endereco: data.endereco,
            categoria: data.categoria,
            jornada: data.jornada,
            origem: data.origem,
            responsavel: data.responsavel,
            telefone: data.telefone,
            website: data.website,
            descricao: data.descricao
        }
    }, { new: true })

    return empresa

}
