const model = require('../model/doacoes') //coloca esse para puxar do bdd pq os arq do model sao reflexo do q tem no bdd

const fs = require('fs');

exports.postDoacoes = (req, res) => {
  let doacoes = new model(req.body); //pega as informaçoes do body da requisicao e modela um novo pacote

  doacoes.save(function (err) {
    if (err) res.status(500).send(err);
    else {
      res.status(201).send({
        status: true,
        mensagem: "Doacoes incluida com sucesso"
      });
    };
  });
}




exports.getDoacoes = (req, res) => {
  model.find(function (err, doacoes) { 
    if (err) res.status(500).send(err);
    res.status(200).send(doacoes)
  })
}


exports.getById = (req, res) => {
  const doacaoId = req.params.id

  model.findById(doacaoId, function (err, doacao) {
    if (err) return res.status(500).send(err);
    if (!doacao) {
      return res.status(200).send({ message: `Infelizmente não localizamos a doacao de id: ${doacaoId}` });
    }
    res.status(200).send(doacao);
  })
}



exports.getVencimento = (req, res) => {
  const hoje = new Date();
  const hojeMili = hoje.setDate(hoje.getDate());
  const vencMax10d = hoje.setDate(hoje.getDate()+10);

  model.find(function (err, prods) {
    if (err) res.status(500).send(err)    

    const ab = prods.vencimento
    const n = prods.filter(aluna => { return (aluna.vencimento.setDate(aluna.vencimento.getDate() )) < vencMax10d})
  
    res.status(200).send(n);  
    
  })

}
    
    
exports.updateDoacoes = (req, res) => {
    model.update(
      { _id: req.params.id },
      { $set: req.body },
      { upsert: true},
      function (err) {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Atualizado com sucesso!!!"});
      })
}

const validaFormulario = (campos) => {  
  const schema = {
    nome: joi.string().min(1).required(),
    quantidade: joi.number().min(1).required()
  }
}


exports.deleteDoacoes = (req, res) => {
  const doacaoId = req.params.id;

  model.findById(doacaoId, function (err, doacao){
    if (err) res.status(500).send(err);

    if (!doacao){
      return res.status(200).send({ message: "Infelizmente essa doacao não foi encontrada!!!"});
    }
    doacao.remove(function(err){
      if(!err) {
        res.status(200).send({ message: "Doacao removido com sucesso!!!"});
      }
    }) 
    
  })
}


