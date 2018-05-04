function unflattenMatrix(params) {
  let flat_matrix = params[0];
  let num_rows = params[1];
  let num_cols = params[2];
  let matrix = [];

  for (let cur_row = 0; cur_row < num_rows; cur_row++) {
    let row = [];
    matrix.push(row);
    for (let cur_col = 0; cur_col < num_cols; cur_col++) {
      row.push(flat_matrix[cur_row * num_cols + cur_col])
    }
  }

  return new Promise(function (resolve, reject) {
    resolve([matrix, num_rows, num_cols]);
  });
}

function flattenMatrix(params) {
  let matrix = params[0];
  let num_rows = params[1];
  let num_cols = params[2];
  let flat_matrix = [];

  for (let cur_row = 0; cur_row < num_rows; cur_row++) {
    for (let cur_col = 0; cur_col < num_cols; cur_col++) {
      flat_matrix.push(matrix[cur_row][cur_col])
    }
  }

  return new Promise(function (resolve, reject) {
    resolve([flat_matrix, num_rows, num_cols])
  })
}

function flipMatrixVertical(params) {
  let matrix = params[0];
  let num_rows = params[1];
  let num_cols = params[2];
  for (let cur_row = 0; cur_row < num_rows; cur_row++) {
    for (let cur_col = 0; cur_col < Math.floor(num_cols/2); cur_col++) {
      let temp = matrix[cur_row][cur_col];
      matrix[cur_row][cur_col] = matrix[cur_row][num_cols - cur_col - 1];
      matrix[cur_row][num_cols - cur_col - 1] = temp;

    }
  }
  return new Promise(function (resolve, reject) {
    resolve([matrix, num_rows, num_cols])
  });
}

function flipMatrixHorizontal(params) {
  let matrix = params[0];
  let num_rows = params[1];
  let num_cols = params[2];
  for (let cur_row = 0; cur_row < Math.floor(num_rows/2); cur_row++) {
    for (let cur_col = 0; cur_col < num_cols; cur_col++) {
      let temp = matrix[cur_row][cur_col];
      matrix[cur_row][cur_col] = matrix[num_rows - cur_row - 1][cur_col];
      matrix[num_rows - cur_row - 1][cur_col] = temp;

    }
  }
  return new Promise(function (resolve, reject) {
    resolve([matrix, num_rows, num_cols])
  });
}

function transposeMatrix(params) {
  let matrix = params[0];
  let num_rows = params[1];
  let num_cols = params[2];

  for (let cur_row = 0; cur_row < num_rows; cur_row++) {
    for (let cur_col = 0; cur_col < cur_row; cur_col++) {
      let temp = matrix[cur_row][cur_col];
      matrix[cur_row][cur_col] = matrix[cur_col][cur_row];
      matrix[cur_col][cur_row] = temp;
    }
  }

  return new Promise(function (resolve, reject) {
    resolve([matrix, num_rows, num_cols]);
  });
}

function rotateMatrixLeft(params) {
  let matrix = params[0];
  let num_rows = params[1];
  let num_cols = params[2];

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
    resolve([matrix, num_rows, num_cols])
  });
}

function rotateMatrixRight(params) {
  let matrix = params[0];
  let num_rows = params[1];
  let num_cols = params[2];

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
    resolve([matrix, num_rows, num_cols])
  });
}

let test_matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9];

unflattenMatrix([test_matrix, 3, 3])
  .then(function (params) {
    return flipMatrixVertical(params);
  })
  .then(function (params) {
    return flattenMatrix(params);
  })
  .then(function (params){
    console.log(params);
  });

unflattenMatrix([test_matrix, 3, 3])
  .then(function (params) {
    return flipMatrixHorizontal(params);
  })
  .then(function (params) {
    return flattenMatrix(params);
  })
  .then(function (params){
    console.log(params);
  });


unflattenMatrix([test_matrix, 3, 3])
  .then(function (params) {
    return transposeMatrix(params);
  })
  .then(function (params) {
    return flattenMatrix(params);
  })
  .then(function (params){
    console.log(params);
  });

unflattenMatrix([test_matrix, 3, 3])
  .then(function (params) {
    return rotateMatrixLeft(params);
  })
  .then(function (params) {
    return flattenMatrix(params);
  })
  .then(function (params){
    console.log(params);
  });


unflattenMatrix([test_matrix, 3, 3])
  .then(function (params) {
    return rotateMatrixRight(params);
  })
  .then(function (params) {
    return flattenMatrix(params);
  })
  .then(function (params){
    console.log(params);
  });
