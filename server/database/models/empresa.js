const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
    nome: { type: String, default: '' },
    cnpj: { type: String, default: '' },
    endereco: { type: String, default: '' },
    categoria: { type: String, enum: ['Cliente efetivo', 'Cliente em potencial', 'Concorrente', 'Fornecedor', 'Parceiro'] },
    jornada: { type: String, enum: ['Conhece', 'Gosta', 'Conectado', 'Vive'] },
    origem: { type: String, enum: ['Evento', 'Indicação', 'Site', 'Outros'] },
    responsavel: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    telefone: { type: String, default: '' },
    website: { type: String, default: '' },
    descricao: { type: String, default: '' },
});

module.exports = mongoose.model('Empresa', EmpresaSchema);