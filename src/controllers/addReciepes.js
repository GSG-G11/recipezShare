const { addReciepesQuery } = require('../database/queries/addReciepesQuery');

const addRecipes = (req, res) => {
  const { title, detail, userId } = req.body;

  addReciepesQuery(title, detail, userId)
    .then((data) => res.json(data.rows))
    .catch((err) => console.log('error on addRecipes query', err));
};

module.exports = { addRecipes };
