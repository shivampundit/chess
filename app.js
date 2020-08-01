var queen = {
  position: {
    row: 0,
    column: 0,
  },

  direction: "S",
};

var board = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
];

// decleration
var steps,
  direction,
  flag = "yes";

// multiple input till user entered no
while (flag != "no") {
  var flag = "yes";
  var direction = window.prompt("Enter the direction");
  var steps = window.prompt("Enter the number of steps");

  // conversion of string in number
  steps = parseInt(steps);
  movequeen(direction, steps);

  //continue or not
  flag = window.prompt("do you want to continue yes/no");
}

// funtion to move the queen object
function movequeen(direction, steps) {
  switch (direction) {
    case "S":
      queen.position.row = queen.position.row + steps;
      break;
    case "N":
      queen.position.row = queen.position.row - steps;
      break;
    case "E":
      queen.position.column = queen.position.column + steps;
      break;
    case "W":
      queen.position.column = queen.position.column - steps;
      break;
    case "NE":
      queen.position.row = queen.position.row - steps;
      queen.position.column = queen.position.column + steps;
      break;
    case "NW":
      queen.position.row = queen.position.row - steps;
      queen.position.column = queen.position.column - steps;
      break;
    case "SE":
      queen.position.row = queen.position.row + steps;
      queen.position.column = queen.position.column + steps;
      break;
    case "SW":
      queen.position.row = queen.position.row - steps;
      queen.position.column = queen.position.column - steps;
      break;
  }
  console.log(queen.position);
}
