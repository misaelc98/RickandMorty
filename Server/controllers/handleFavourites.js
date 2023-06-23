let myFavs = [];

function addFav(req, res) {
  const character = req.body;

  myFavs.push(character);

  res.status(200).json(myFavs);
};

function deleteFav(req, res) {

  const {id}  = req.params;

  const filtered = myFavs.filter((character) => character.id !== Number(id));

  myFavs = filtered;

  res.status(200).json(filtered);
};

module.exports = {
  addFav,
  deleteFav,
};
