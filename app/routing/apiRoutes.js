// require mysql
// connection info
// create the connection

let friends;

//declare functions for querying the db and a finding match
function getProfiles() {
  connection.query("SELECT * FROM profiles");
  friends = profiles;
}

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

module.exports = {
  //get route for all profiles
  //post route to add new profiles
  //when posting new user data, also use that data to find match
  //response with matched profile
  // const friends = getFriends()
  // findMatch(userData, friends)
};
