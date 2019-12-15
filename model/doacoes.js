const mongoose = require('mongoose')

//INSTANCIANDO UM NOVO SCHEMA(MODELO) caracteristicas q o objeto vai possuir
const doacoesSchema = new mongoose.Schema({
    produto: {type: String},
    marca: {type: String},
    vencimento: {type: Date},
    quantidade: {type: Number},
    sabor: [{
        _id: false,
        tipo:{type: String}
    }]
    
},
{
    versionKey: false  ///TIRA O V QUANDO CRIA UM NOVO REGISTRO
})


// ESTA DIZENDO QUE ESSE MODEL TEM ESSAS CARACTERISTICAS,EXPORTA AQUI
const Doacoes = mongoose.model('Doacoes', doacoesSchema);

module.exports = Doacoes;