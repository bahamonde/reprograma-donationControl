const express = require("express")
const router = express.Router()
const controller = require("../controllers/doacoesController")



/**
 * @api {post} /doacoes
 * @apiGroup Doacoes
 * * 
 * @apiSuccess {Object[]} doacoes Cadastra uma nova doação
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   {
 *     "Doacao incluida com sucesso"
 *   }
 *
 */
router.post("/", controller.postDoacoes)

/**
 * @api {get} /doacoes
 * @apiGroup Doacoes
 * * 
 * @apiSuccess {Object[]} doacoes Lista de Doacoes cadastradas
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *     
 *       "produto": "Maionese",
 *       "marca": "Helmans"
 *       "vencimento": "2019-12-03",
 *       "quantidade": 10,
 *       "sabor": [{
 *          tipo:"salgado"
 *                }]
 *    }]
 *
 */

router.get("/", controller.getDoacoes)

/**
 * @api {get} /vencimentorapido
 * @apiGroup Doacoes
 * * 
 * @apiSuccess {Object[]} doacoes Lista de Doacoes que o prazo de validade vence em até 10 dias
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *     
 *       "produto": "Maionese",
 *       "marca": "Helmans"
 *       "vencimento": "2019-12-03",
 *       "quantidade": 10,
 *       "sabor": [{
 *          tipo:"salgado"
 *                }]
 *    }]
 *
 */
router.get("/vencimentorapido", controller.getVencimento)

/**
 * @api {get} /doacoes
 * @apiGroup Doacoes
 * * 
 * @apiSuccess {Object[]} doacoes Lista de Doacoes com prazo de validade já vencido
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *     
 *       "produto": "Maionese",
 *       "marca": "Helmans"
 *       "vencimento": "2019-12-03",
 *       "quantidade": 10,
 *       "sabor": [{
 *          tipo:"salgado"
 *                }]
 *    }]
 *
 */
router.get("/vencidos", controller.getVencidos)

/**
 * @api {get} /:id
 * @apiGroup Doacoes
 * * 
 * @apiSuccess {Object[]} retorna a doacao referente ao id buscado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *     
 *       "produto": "Maionese",
 *       "marca": "Helmans"
 *       "vencimento": "2019-12-03",
 *       "quantidade": 10,
 *       "sabor": [{
 *          tipo:"salgado"
 *                }]
 *    }]
 *
 */
router.get("/:id", controller.getById)

/**
 * @api {put} /:id
 * @apiGroup Doacoes
 * * 
 * @apiSuccess {Object[]} doacoes Atualiza as informacoes de uma doação especifica selecionada pelo id
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   {
 *     "Atualizado com sucesso!!!"
 *   }
 *
 */
router.put("/:id", controller.updateDoacoes)

/**
 * @api {delete} /:id
 * @apiGroup Doacoes
 * * 
 * @apiSuccess {Object[]} doacoes Deleta uma doacao especifica selecionada pelo id
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   {
 *     "Doacao removida com sucesso!!!"
 *   }
 *
 */
router.delete("/:id", controller.deleteDoacoes)



module.exports = router
