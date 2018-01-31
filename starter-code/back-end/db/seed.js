var DB = require("../models").models;


var lucySongs = [
    {
        title: "O sole mio",
        duration: "3:21",
        date_of_release: "1990",
        album_title: "Three Tenors in Concert",
        artistId: ""
    },
    {
        title: "Nessun dorma",
        duration: "3:21",
        date_of_release: "1990",
        album_title: "Three Tenors in Concert",
        artistId: ""
    }
];
// function to create manager
var managerCreate = function () {
    return DB.Manager.create({
        name: 'Ricky Bobby',
        email: 'rbobby@gmail.com',
        office_number: '516-877-0304',
        cell_phone_number: '718-989-1231'
    }) // once the manager is created, this function runs
        // takes in the newly created manager
        .then(function(manager) {
            return DB.Artist.create({
                name: 'Luciano Pavarotti',
                photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
                nationality: 'Italiano',
                instrument: 'Voice',
                home_address: '1 Strada Roma',
                // this line connects this current artist's manager id to the newly created manager's id
                managerId: manager.id
                // once the artist is created with the connection to the artist,
                // the lucySongs are connected to this artist but not the manager
            }).then(function (artist) {
                lucySongs.forEach(function (song) {
                    song.artistId = artist.id;
                    // to connect songs to a manager, would need to change the relationship between the two
                    // song.managerId = manager.id;
                });
                DB.Song.bulkCreate(lucySongs);
            });
        })
        ;
};

//  var artistCreate = function() {
//  	return DB.Artist.create({
//      name: 'Luciano Pavarotti',
//      photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
//      nationality: 'Italiano',
//      instrument: 'Voice',
//      home_address: '1 Strada Roma'
//    })
          
//  };
 
 var songCreate = function() {
 	return DB.Song.create({
 	    title: 'The Best Song Ever',
 	    duration: '3:31',
 	    date_of_release: '7/13/2015',
 	    album_title: 'Best Album Ever'
 	});
 };
 
managerCreate()
 .then(songCreate)
 .then(function() {
 	process.exit();
 }); 