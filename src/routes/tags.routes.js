const {Router} = require("express")

const TagsController = require("../controllers/TagsController")
<<<<<<< HEAD
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
=======
>>>>>>> 5e87f7409ad3a343b327dbb66783e080ec1d5324

const tagsRoutes = Router()

const tagsController = new TagsController()

<<<<<<< HEAD
tagsRoutes.get("/", ensureAuthenticated, tagsController.index) 
=======
tagsRoutes.get("/:user_id", tagsController.index) 
>>>>>>> 5e87f7409ad3a343b327dbb66783e080ec1d5324

module.exports = tagsRoutes 