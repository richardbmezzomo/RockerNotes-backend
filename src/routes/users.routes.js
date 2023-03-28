const {Router} = require("express")

const UsersController = require("../controllers/UsersController")
<<<<<<< HEAD
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
=======
>>>>>>> 5e87f7409ad3a343b327dbb66783e080ec1d5324

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post("/", usersController.create) 
<<<<<<< HEAD
usersRoutes.put("/", ensureAuthenticated, usersController.update)
=======
usersRoutes.put("/:id", usersController.update)
>>>>>>> 5e87f7409ad3a343b327dbb66783e080ec1d5324

module.exports = usersRoutes