
var friends = require("../data/friends.js");
var express = require("express");
var bodyParser = require("body-parser");
var apirouter = express.Router();

// Current Friends List
apirouter.get("/api/friends", function(req,res){
  res.json(friends);
})


//New User Function
apirouter.post("/api/friends", function(req, res){
  console.log("almost there...");
  var newFriend = req.body;
  console.log(newFriend);

  //FUNCTION FOR CONVERTING THE USERS RESULTS INTO AN ARRAY
  var newScore = function(array){
    var newScore = [];
    for (var i = 0; i < array.length; i++) {
      newScore.push(parseInt(array[i]));
    }
    return newScore;
  }
  //this function calculates difference of elements between two arrays and then sums up the difference
  var totalDiff = function(arrA, arrB){
    delta = 0;
    for(var i=0; i<arrA.length; i++){
      delta += Math.abs(arrA[i] - arrB[i]);
    }
    return delta;
  }

  function indexOfMin(array) {
      if (array.length === 0) {
          return -1;
      }

      var min = array[0];
      var minIndex = 0;

      for (var i = 1; i < array.length; i++) {
          if (array[i] < min) {
              minIndex = i;
              min = array[i];
          }
      }

      return minIndex;
  }

  var newFriendOutcome = newScore(newFriend['scores[]']); //array of numbers
  var currentFriendOutcome = []; //array of arrays
  var differences = [];

  //recall friends is an array of objects
  for(var i=0; i < friends.length;i++){
    currentFriendOutcome.push(newScore(friends[i]['scores[]']));
  }

  //This takes differences between current friend score and new friend score
  for (var i=0; i < currentFriendOutcome.length; i++){
    differences.push(totalDiff(newFriendOutcome, currentFriendOutcome[i]));
  }
  console.log("Calculating scores...");


  var minFriend = indexOfMin(differences);
  var matchFriend = friends[minFriend];
  console.log("Matching...");
  console.log(matchFriend);
  

  friends.push(newFriend);
  res.json(matchFriend);
})

module.exports = apirouter;