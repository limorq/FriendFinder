// We are linking our routes to the data source.
var friend = require("../app/data/friends");
var path = require("path");


// ROUTING

module.exports = function(app) {

  // Below code handles when users "visit" a page

  app.get("/api/friends", function(req, res) {
    res.json(friend);
  });


  app.post("/api/friends", function(req, res) {
  	var currentUser = req.body;
    var winner;
     friend.push(currentUser);
      findFriend(currentUser);
      postFriend(winner);
      console.log(currentUser);
      
      
  });
}

function findFriend(me) {
	var totalDiff = 0;
  for (var i=0; i<friend.length; i++) {
      var you = friend[i];
      for (var j=0; j<you.scores[j].length; j++) {
        if (you.scores[j] === me.scores[j]) {
          console.log(friend);
          console.log(you.scores[j] + "," + me.scores[j]);
          totalDiff += 0;
        }
        else {
          totalDiff += (Math.abs(you.scores[j] - me.scores[j]));
          console.log(totalDiff);
        }
      }
      friend[i].difference = totalDiff;     
  }
  //console.log("this is the difference given to " + friend[i] + ":" + totalDiff);
}

function postFriend(winner) {
  for (var i=0; i<friend.length-1; i++) {

    if (friend[i].difference < friend[i+1].difference) {
      winner = friend[i];
      console.log("the winner is:" + winner);
    }
  }
}
