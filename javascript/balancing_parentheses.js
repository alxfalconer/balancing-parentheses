function balancingParentheses(string) {
  let opener = 0
  let closer = 0

  for (const item of string) {
    item === "(" ? opener +=1 : closer +=1
  }

  return closer - opener

  // for (const item of string) {
  //   item === "(" ? opener += 1 : opener -=1
  // }

  // return Math.abs(opener)

}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
