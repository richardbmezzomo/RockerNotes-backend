const {Router} = require("express")

const NotesController = require("../controllers/NotesController")
<<<<<<< HEAD
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
=======
>>>>>>> 5e87f7409ad3a343b327dbb66783e080ec1d5324

const notesRoutes = Router()

const notesController = new NotesController()

<<<<<<< HEAD
notesRoutes.use(ensureAuthenticated)

notesRoutes.post("/", notesController.create) 
notesRoutes.get("/:id", notesController.show) 
notesRoutes.delete("/:id", notesController.delete) 
notesRoutes.get("/", notesController.index) 
=======
notesRoutes.get("/", notesController.index) 
notesRoutes.post("/:user_id", notesController.create) 
notesRoutes.get("/:id", notesController.show) 
notesRoutes.delete("/:id", notesController.delete) 
>>>>>>> 5e87f7409ad3a343b327dbb66783e080ec1d5324




module.exports = notesRoutes 