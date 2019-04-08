var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "friendfinder_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    //once successfully connected, you may want to query your database for the info you'll need later!
  }
});

var path = require("path");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    // console.log("ROUTE HIT?!");
    getProfiles(res);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 5000
    };
    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference = 0;

    for (var i = 0; o < friends.length; i++) {
      totalDifference += Math.abs(
        parseInt(userScores[i]) - parseInt(friends[i])
      );
    }
  });
  //express is the server!
  //get route for all profiles
  //post route to add new profiles
  //when posting new user data, also use that data to find match
  //response with matched profile
  // const friends = getFriends()
  // findMatch(userData, friends)
};

// let friends;

//declare functions for querying the db and a finding match
function getProfiles(response) {
  connection.query("SELECT * FROM profiles", function(err, result) {
    if (err) {
      console.log("error: ", err);
    }
    // console.log(result);

    response.json(result);
  });
}
// friends = profiles;
//finding a match

// function findMatch(userData, friends) {
//     const bestMatch = {
//         name: '',
//         photo: 'url',
//         friendDifference: Infinity
//     }

//     for (let i loop over the friends) {
//         totalDifference = 0;
//         currentFriend = friends[i]

//         for (let j loop over currentFriend.scores){
//             //compare the userData.scores[j] and currentFriend.scores[j]

//             totalDifference += Math.abs(parseInt(user score) - parseInt(friend score))
//         }

// if (totalDifference <= bestMatch.friendDifference) {
//             bestMatch = currentFriend
//         }

//     }

// return bestMatch;
// }

// }
