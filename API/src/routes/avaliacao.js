var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

// Rota para cadastrar (POST)
router.post("/cadastrar", function (req, res) {
    avaliacaoController.cadastrar(req, res);
});

// Rota para a dashboard (GET)
router.get("/dashboard/:idMenor", function (req, res) {
    avaliacaoController.buscarDadosDashboard(req, res);
});

module.exports = router;