const tacheSchema = require("../models/tache");
exports.getArticles = async (req, res) => {
    try {
      const taches = await tacheSchema.find();
      res.status(200).send(taches);
    } catch (err) {
      console.log(err);
      res.status(400).send("there is no articles");
    }
  };