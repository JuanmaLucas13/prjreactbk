const express = require("express");
const paisesRouter = express.Router();
const {getPaises, getPaisesbyId, getPaisPaginado,
    postPaises, putPaises, deletePaises} = require ('../controllers/paises.controllers')

const {isAuth} = require("../../middlewares/auth")
const upload = require("../../middlewares/upload.file");

// const {getArtist, postArtist, putArtist, deleteArtist} = require("../controllers/artist.controllers");
// const { isAuth, isAdmin} = require("../../middlewares/auth");

paisesRouter.get("/", [isAuth],getPaises)
paisesRouter.get("/pais/:id", [isAuth],getPaisesbyId)
paisesRouter.get("/paginacion", [isAuth], getPaisPaginado)

paisesRouter.post("/", [isAuth], postPaises)
paisesRouter.put("/:id", [isAuth], putPaises)
paisesRouter.delete("/:id", [isAuth], deletePaises)

module.exports = paisesRouter