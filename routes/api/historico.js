const bodyParser = require("body-parser");
const config = require("../../config");
const Registro = require("../../models/registro");

module.exports = function (app, express) {
  let apiRouter = express.Router();

  apiRouter.route("/")
    .post(function (req, res) {
      let registro = new Registro();
      registro.player1 = req.body.player1;
      registro.player2 = req.body.player2;
      registro.winner = req.body.winner;
      registro.likes = req.body.likes;
      registro.date = new Date().toLocaleDateString();

      registro.save(function (err) {
        if (err) {
          if (err.code == 11000)
            return res.json({ success: false, message: "Ya existe un registro con este nombre." });
          else
            return res.send(err);
        }
        return res.json({ message: "Registro creado." });
      });
    })

    .get(function (req, res) {
      Registro.find({}, function (err, historico) {
        if (err) res.send(err);

        res.send(historico);
      });
    });
  return apiRouter;
};