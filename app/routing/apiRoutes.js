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
var friends = [];

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    // console.log("ROUTE HIT?!");
    getProfiles(res);
  });
  // function findMatch(userData, friends) {
  //   console.log(userData);
  //   console.log(friends);
  // }
  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    res.json(getMatch(req.body, friends));
    // getMatch(req.body, res);
  });
};

function getMatch(userData, friends) {
  var match = {};
  var lowestDif = 1000;
  var totalDifference;

  for (var i = 0; i < friends.length; i++) {
    totalDifference = 0;
    friends[i].scores = friends[i].scores.split(",");
    for (var j = 0; j < friends[i].scores; j++) {
      totalDifference += Math.abs(
        parseInt(userData.scores[j]) - parseInt(friends[i].scores[j])
      );
    }
    if (totalDifference < lowestDif) {
      match = friends[i];
      lowestDif = totalDifference;
    }
  }
  return match;
}

// //declare functions for querying the db and a finding match
function getProfiles(response) {
  connection.query("SELECT * FROM profiles", function(err, result) {
    if (err) {
      console.log("error: ", err);
    }
    // console.log(result);
    friends = result;
    console.log(friends);
    response.json(result);
  });
}

//====================================================================
//PSEUDO CODE
//=====================================================================
/* friends = profiles;
//finding a match

// function findMatch(userData, friends) {
var match = {}
var lowestDif = Infinity

//     for (let i loop over the friends) {
//         totalDifference = 0;
//         currentFriend = friends[i]

//         for (let j loop over currentFriend.scores){
//             //compare the userData.scores[j] and currentFriend.scores[j]

//             totalDifference += Math.abs(parseInt(user score) - parseInt(friend score))
//         }

// if (totalDifference < lowestDif) {
//             match = currentFriend
//         }

//     }

// return bestMatch;
  }*/
