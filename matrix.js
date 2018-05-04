function unflattenMatrix({matrix, num_rows, num_cols}) {
  let ret_matrix = [];
  for (let cur_row = 0; cur_row < num_rows; cur_row++) {
    let row = [];
    ret_matrix.push(row);
    for (let cur_col = 0; cur_col < num_cols; cur_col++) {
      row.push(matrix[cur_row * num_cols + cur_col])
    }
  }

  return new Promise(function (resolve, reject) {
    debugger;
    resolve({matrix: ret_matrix, num_rows, num_cols});
  });
}

function flattenMatrix({matrix, num_rows, num_cols}) {
  let flat_matrix = [];

  for (let cur_row = 0; cur_row < num_rows; cur_row++) {
    for (let cur_col = 0; cur_col < num_cols; cur_col++) {
      flat_matrix.push(matrix[cur_row][cur_col])
    }
  }

  return new Promise(function (resolve, reject) {
    resolve({matrix: flat_matrix, num_rows, num_cols})
  })
}

function flipMatrixVertical({matrix, num_rows, num_cols}) {
  debugger;
  for (let cur_row = 0; cur_row < num_rows; cur_row++) {
    for (let cur_col = 0; cur_col < Math.floor(num_cols/2); cur_col++) {
      let temp = matrix[cur_row][cur_col];
      matrix[cur_row][cur_col] = matrix[cur_row][num_cols - cur_col - 1];
      matrix[cur_row][num_cols - cur_col - 1] = temp;
    }
  }
  return new Promise(function (resolve, reject) {
    debugger;
    resolve({matrix, num_rows, num_cols})
  });
}

function flipMatrixHorizontal({matrix, num_rows, num_cols}) {
  for (let cur_row = 0; cur_row < Math.floor(num_rows/2); cur_row++) {
    for (let cur_col = 0; cur_col < num_cols; cur_col++) {
      let temp = matrix[cur_row][cur_col];
      matrix[cur_row][cur_col] = matrix[num_rows - cur_row - 1][cur_col];
      matrix[num_rows - cur_row - 1][cur_col] = temp;
    }
  }
  return new Promise(function (resolve, reject) {
    resolve({matrix, num_rows, num_cols})
  });
}

function transposeMatrix({matrix, num_rows, num_cols}) {
  for (let cur_row = 0; cur_row < num_rows; cur_row++) {
    for (let cur_col = 0; cur_col < cur_row; cur_col++) {
      let temp = matrix[cur_row][cur_col];
      matrix[cur_row][cur_col] = matrix[cur_col][cur_row];
      matrix[cur_col][cur_row] = temp;
    }
  }

  return new Promise(function (resolve, reject) {
    resolve({matrix, num_rows, num_cols});
  });
}

function rotateMatrixLeft({matrix, num_rows, num_cols}) {
  for (let cur_row = 0; cur_row < Math.floor(num_rows/2); cur_row++) {
    for (let cur_col = 0; cur_col <= Math.floor(num_cols/2); cur_col++) {
      let temp = matrix[cur_row][cur_col];
      matrix[cur_row][cur_col] = matrix[cur_col][num_cols - cur_row - 1];
      matrix[cur_col][num_cols - cur_row - 1] = matrix[num_cols - cur_row - 1][num_cols - cur_col - 1];
      matrix[num_cols - cur_row - 1][num_cols - cur_col - 1] = matrix[num_cols - cur_col - 1][cur_row];
      matrix[num_cols - cur_col - 1][cur_row] = temp;
    }
  }

  return new Promise(function (resolve, reject) {
    resolve({matrix, num_rows, num_cols})
  });
}

function rotateMatrixRight({matrix, num_rows, num_cols}) {
  for (let cur_row = 0; cur_row < Math.floor(num_rows/2); cur_row++) {
    for (let cur_col = 0; cur_col <= Math.floor(num_cols/2); cur_col++) {
      let temp = matrix[cur_row][cur_col];
      matrix[cur_row][cur_col] = matrix[num_rows - cur_col - 1][cur_row];
      matrix[num_rows - cur_col - 1][cur_row] = matrix[num_rows - cur_row - 1][num_rows - cur_col - 1];
      matrix[num_rows - cur_row - 1][num_rows - cur_col - 1] = matrix[cur_col][num_rows - cur_row - 1];
      matrix[cur_col][num_rows - cur_row - 1] = temp;
    }
  }

  return new Promise(function (resolve, reject) {
    resolve({matrix, num_rows, num_cols})
  });
}

let test_matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num_rows = 3;
const num_cols = 3;

const test_case = {matrix: test_matrix, num_rows, num_cols};

unflattenMatrix(test_case)
  .then(function (params) {
    return flipMatrixVertical(params);
  })
  .then(function (params) {
    return flattenMatrix(params);
  })
  .then(function (params){
    console.log(params);
  });

unflattenMatrix(test_case)
  .then(function (params) {
    return flipMatrixHorizontal(params);
  })
  .then(function (params) {
    return flattenMatrix(params);
  })
  .then(function (params){
    console.log(params);
  });


unflattenMatrix(test_case)
  .then(function (params) {
    return transposeMatrix(params);
  })
  .then(function (params) {
    return flattenMatrix(params);
  })
  .then(function (params){
    console.log(params);
  });

unflattenMatrix(test_case)
  .then(function (params) {
    return rotateMatrixLeft(params);
  })
  .then(function (params) {
    return flattenMatrix(params);
  })
  .then(function (params){
    console.log(params);
  });


unflattenMatrix(test_case)
  .then(function (params) {
    return rotateMatrixRight(params);
  })
  .then(function (params) {
    return flattenMatrix(params);
  })
  .then(function (params){
    console.log(params);
  });

