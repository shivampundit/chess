var queen = {
  position: {
    row: 0,
    column: 0,
  },

  direction: "S",
};

var board = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

// decleration
var steps, direction;

// funtion to move the queen object
function movequeen(direction, steps) {
  let temp;
  let temp1;
  console.log("direction " + direction);
  console.log("steps " + steps);

  switch (direction) {
    case "S":
      temp = queen.position.row + steps;
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary");
        document.write("out of boundary");
      } else {
        queen.position.row = temp;
      }
      break;
    case "N":
      temp = queen.position.row - steps;
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary");
        document.write("out of boundary");
      } else {
        queen.position.row = temp;
      }
      break;
    case "E":
      temp = queen.position.column + steps;
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary");
        document.write("out of boundary");
      } else {
        queen.position.column = temp;
      }
      break;
    case "W":
      temp = queen.position.column - steps;
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary");
        document.write("out of boundary");
      } else {
        queen.position.column = temp;
      }
      break;
    case "NE":
      temp = queen.position.row - steps;

      temp1 = queen.position.column + steps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary");
        document.write("out of boundary");
      } else {
        queen.position.row = temp;
        queen.position.column = temp1;
      }
      break;
    case "NW":
      temp = queen.position.row - steps;

      temp1 = queen.position.column - steps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary");
        document.write("out of boundary");
      } else {
        queen.position.row = temp;
        queen.position.column = temp1;
      }
      break;
    case "SE":
      temp = queen.position.row + steps;

      temp1 = queen.position.column + steps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary");
        document.write("out of boundary");
      } else {
        queen.position.row = temp;
        queen.position.column = temp1;
      }
      break;
    case "SW":
      temp1 = queen.position.row - steps;

      temp = queen.position.column - steps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary");
        document.write("out of boundary");
      } else {
        queen.position.row = temp;
        queen.position.column = temp1;
      }
      break;

    default:
      document.write("Invalid Input");
  }
}

function play() {
  var value = document.getElementById("position").value;
  var input = value.split(" ");
  input.forEach((num) => {
    let number = Number(num.slice(num.length - 1));
    let direction = num.slice(0, num.length - 1);
    movequeen(direction, number);
  });
  console.log(
    "Queen's current position ->" +
      board[queen.position.row][queen.position.column]
  );
}
