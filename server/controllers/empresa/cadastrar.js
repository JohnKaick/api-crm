const mongoose = require('mongoose')
const Empresa = mongoose.model('Empresa')

module.exports = async function (data) {

    let empresa = await Empresa.create({
        nome: data.nome,
        cnpj: data.cnpj,
        endereco: data.endereco,
        categoria: data.categoria || 'Cliente em potencial',
        jornada: data.jornada || 'Conhece',
        origem: data.origem || 'Outros',
        responsavel: data.responsavel || null,
        telefone: data.telefone,
        website: data.website,
        descricao: data.descricao
    })

    return empresa

}
