<<<<<<< HEAD
=======
const { request } = require("express")
>>>>>>> 5e87f7409ad3a343b327dbb66783e080ec1d5324
const knex = require("../database/knex")

class TagsController {
  async index(request, response) {
<<<<<<< HEAD
    const user_id = request.user.id
=======
    const { user_id }= request.params
>>>>>>> 5e87f7409ad3a343b327dbb66783e080ec1d5324

    const tags = await knex("tags")
    .where({ user_id })

    return response.json(tags)
  }
}

module.exports = TagsController 