const getOutput = (inputs, queries) =>
  queries.map((query) => inputs.filter((input) => query === input).length);

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
console.log(getOutput(INPUT, QUERY)); // [ 1, 0, 2 ]
