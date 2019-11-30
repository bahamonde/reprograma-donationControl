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



exports.updateDoacoes = (req, res) => {
    model.update(
      { id: req.params.id },
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
  const id = req.params.id;

  model.findOne({ id }, function(err, doacoes){
    if (err) res.status(500).send(err);

    if (!doacoes){
      return res.status(200).send({ message: "Infelizmente essa doacao não foi encontrada!!!"});
    }
    doacoes.remove(function(err){
      if(!err) {
        res.status(200).send({ message: "Doacao removido com sucesso!!!"});
      }
    }) 
    
  })
}





