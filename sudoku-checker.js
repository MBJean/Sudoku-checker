var check;

function doneOrNot(board){
  check = true;
  rowChecker(board);
  columnChecker(board);
  sectionChecker(board);
  if (check === true) {
    return "Finished!";
  } else {
    return "Try again!";
  }
}

function rowChecker(input) {
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < input[i].length; j++) {
      for (k = j + 1; k < input[i].length; k++) {
        if (input[i][j] === input[i][k]) {
          check = false;
          }
      }
    }
  }
}

function columnChecker(input) {
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < input.length; j++) {
      for (k = j + 1; k < input.length; k++) {
        if (input[j][i] === input[k][i]) {
          check = false;
        }
      }
    }
  }
}

function sectionChecker(input) {
  for (i = 0; i < input.length; i+=3) {
    for (j = 0; j < input.length; j+=3) {
      var checkArray = new Array();
      checkArray.push(input[i][j]);
      checkArray.push(input[i][j+1]);
      checkArray.push(input[i][j+2]);
      checkArray.push(input[i+1][j]);
      checkArray.push(input[i+1][j+1]);
      checkArray.push(input[i+1][j+2]);
      checkArray.push(input[i+2][j]);
      checkArray.push(input[i+2][j+1]);
      checkArray.push(input[i+2][j+2]);
      for (k = 0; k < checkArray.length; k++) {
        for (l = k + 1; l < checkArray.length; l++) {
          if (checkArray[k] === checkArray[l]) {
            check = false;
          }
        }
      }
    }
  }
}
