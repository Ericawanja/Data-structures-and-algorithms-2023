/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function (numRows) {
  let triangle = [[1], [1, 1]];

  for (let i = 1; i < numRows -1; i++) {
    let prev = triangle[i];
    let newT = [1];
    for (let j = 0; j < prev.length; j++) {

       console.log( j+1=== prev.length)
      let nextvalue = j+1 !== prev.length ? prev[j + 1] : 0;
      console.log(nextvalue, prev[i]);
      let value = prev[i] + nextvalue;
    //   console.log({value});
      newT.push(value);
    }
    triangle.push(newT);
    prev = newT
    // console.log(triangle);
  }
  return triangle
};

console.log('ss' ,generate(5));
