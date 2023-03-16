const getDiagonalReduction = (matrix) => {
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  matrix.forEach((_matrix, key)=> {
    firstDiagonal += _matrix[key];
    secondDiagonal += _matrix[matrix.length - key - 1];
  })

  return firstDiagonal - secondDiagonal;
};

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
const result = getDiagonalReduction(matrix)
console.log(result); // 15 - 12 = 3