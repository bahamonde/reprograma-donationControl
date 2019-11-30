const express = require("express")
const router = express.Router()
const controller = require("../controllers/doacoesController")

/**
 * @api {get} /doacoes
 * @apiGroup Doacoes
 * * 
 * @apiSuccess {Object[]} doacoes Lista de Doacoes
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *     
 *       "produto": "Maionese ",
 *       "marca": "Helmans"
 *       "vencimento": "2019-12-03T03:00:00.000Z",
 *       "quantidade": 10,
 *       "sabor": [{
 *          tipo:"salgado"
 *                }]
 *    }]
 *
 */


router.post("/", controller.postDoacoes)
router.get("/", controller.getDoacoes)
// router.get("/compradores", controller.getCompradores)
// router.get("/:cpf", controller.getCPF)  //é um param pq vc ta esperando receber esse parametro
router.put("/:id", controller.updateDoacoes)
router.delete("/:id", controller.deleteDoacoes)



module.exports = router
