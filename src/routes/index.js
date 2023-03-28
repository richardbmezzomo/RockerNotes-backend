const { Router } = require("express")

const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")
<<<<<<< HEAD
const sessionsRouter = require("./sessions.routes")

const routes = Router()
routes.use("/users", usersRouter)
routes.use("/sessions", sessionsRouter)
=======

const routes = Router()
routes.use("/users", usersRouter)
>>>>>>> 5e87f7409ad3a343b327dbb66783e080ec1d5324
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)

module.exports = routes 