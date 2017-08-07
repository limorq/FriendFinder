// We are linking our routes to the data source.
var friends = require("../app/data/friends");
var path = require("path");


// ROUTING

module.exports = function(app) {

  // Below code handles when users "visit" a page

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {
    var currentUser = req.body;
    var winner = {name: "Zee", photo: "zone1", scores: [1, 2, 3]};
   friends.push(currentUser);
   findFriend(currentUser);   
   res.json(winner.name);  
  });
}

function findFriend(me) {
	var totalDiff = 0;
  for (var i=1; i<friends.length; i++) {
      var you = friends[i];
      console.log('this is you ' + you.name);
      console.log('this is me ' + me.name);
      for (var j=0; j<you.scores[j].length; j++) {
        console.log("this is your current score " + you.scores[j]);
        console.log("this is my current score " + me.scores[j]);
        if (you.scores[j] === me.scores[j]) {
          totalDiff += 0;
        }
        else {
          totalDiff += (Math.abs(you.scores[j] - me.scores[j]));
        }
      }
      friends[i].difference = totalDiff;     
  }
  for (var i=0; i<friends.length-1; i++) {
    if (friends[i].difference < friends[i+1].difference) {
      winner = friends[i];
    }
  }
  
}


