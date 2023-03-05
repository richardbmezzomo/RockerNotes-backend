const AppError = require("../utils/AppError")

class UsersController {
  /*
  * Index - GET para listar vários registros.
  * Show - GET para exibir um registro especifico.
  * Create - POST para criar um registro
  * Update - PUT para atualizar um registro.
  * Delete - DELETE para remover um registro.
  */

  create(request, response) {
    const { name, email, password} = request.body

    if(!name) {
      throw new AppError("Nome é obrigatório")
    }

    response.json({ name, email, password })
  }
}

module.exports = UsersController