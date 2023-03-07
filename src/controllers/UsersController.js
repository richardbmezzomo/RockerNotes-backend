const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/sqlite")

class UsersController {
  /*
  * Index - GET para listar vários registros.
  * Show - GET para exibir um registro especifico.
  * Create - POST para criar um registro
  * Update - PUT para atualizar um registro.
  * Delete - DELETE para remover um registro.
  */

  async create(request, response) {
    const { name, email, password} = request.body
    
    const database = await sqliteConnection()

    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExists) {
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashedPassword = await hash(password, 8)

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [ name, email, hashedPassword ]
    )

    return response.status(201).json()
  }
}

module.exports = UsersController