//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://apple@localhost:5432/tunr_relationships');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Artist = sequelize.import("./artist");
var Manager = sequelize.import("./manager");
var Song = sequelize.import("./song");

Song.belongsTo(Artist);
Artist.hasMany(Song);

Artist.belongsTo(Manager);
Manager.hasMany(Artist);
// sets up the relationships between manager and songs
// Manager.hasMany(Song);

module.exports.models = {
	Artist: Artist,
	Manager: Manager,
	Song: Song
};
