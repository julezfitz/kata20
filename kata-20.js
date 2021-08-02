const blocksAway = function(directions) {
  let east = 0;
  let north = 0;
  let xAxis = true;
  let south = 0;
  let west;

  for (let i = 0; i < directions.length; i++) {
    //if you are on the xaxis and travelling south(north decremented), and direction is right, east-
    if ((xAxis === true) && (south === true) && (directions[i] === "right")) {
      east -= directions[i + 1];
      xAxis = false;
      west = true;

    //if you are on the xaxis and travelling south(north decremented), and direction is left, east+
    } else if ((xAxis === true) && (south === true) && (directions[i] === "left")) {
      east += directions[i + 1];
      xAxis = false;
      west = false;

    //if you are on the xaxis and travelling north(north incremented), and direction is right, east+
    } else if ((xAxis === true) && (south === false) && (directions[i] === "right")) {
      east += directions[i + 1];
      xAxis = false;
      west = false;
    
    //if you are on the xaxis and travelling north(north incremented), and direction is left, east-
    } else if ((xAxis === true) && (south === false) && (directions[i] === "left")) {
      east -= directions[i + 1];
      xAxis = false;
      west = true;
    
    //if you are on the yaxis and travelling west(east decremented), and direction is right, north+
    } else if ((xAxis === false) && (west === true) && (directions[i] === "right") && (south !== 0)) {
      north += directions[i + 1];
      xAxis = true;
      south = false;
    
    //if you are on the yaxis and travelling west(east decremented), and direction is left, north-
    } else if ((xAxis === false) && (west === true) && (directions[i] === "left") && (south !== 0)) {
      north -= directions[i + 1];
      xAxis = true;
      south = true;
    
    //if you are on the yaxis and travelling east(east incremented), and direction is right, north+
    } else if ((xAxis === false) && (west === false) && (directions[i] === "right") && (south !== 0)) {
      north -= directions[i + 1];
      xAxis = true;
      south = true;
    
    //if you are on the yaxis and travelling east(east incremented), and direction is left, north-
    } else if ((xAxis === false) && (west === false) && (directions[i] === "left") && (south !== 0)) {
      north += directions[i + 1];
      xAxis = true;
      south = false;

    //inital right or left turn
    } else if ((directions[i] === "right") && (xAxis === true)) {
      east += directions[i + 1];
      xAxis = false;
      west = false;
    } else if ((directions[i] === "left") && (xAxis === true)) {
      east -= directions[i + 1];
      xAxis = false;
      west = true;

    //second turn (affecting the north axis where south is not yet declared as true or false)
    } else if ((directions[i - 2] === "right") && (directions[i] === "right") && (xAxis === false)) {
      north -= directions[i + 1];
      xAxis = true;
      south = true;
    } else if ((directions[i - 2] === "right") && (directions[i] === "left") && (xAxis === false)) {
      north += directions[i + 1];
      xAxis = true;
      south = false;
    } else if ((directions[i - 2] === "left") && (directions[i] === "right") && (xAxis === false)) {
      north += directions[i + 1];
      xAxis = true;
      south = false;
    } else if ((directions[i - 2] === "left") && (directions[i] === "left") && (xAxis === false)) {
      north -= directions[i + 1];
      xAxis = true;
      south = true;
    }
  }
  let directionSet = {
    east: east,
    north: north
  };
  return directionSet;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));