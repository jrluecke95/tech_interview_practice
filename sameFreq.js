function sameFrequency(num1, num2) {
  // setting my number strings up
  let num1Str = num1.toString();
  let num2Str = num2.toString();
  // setting up objects to keep track of number count
  let num1Obj = {};
  let num2Obj = {};
  // cehcking length first 
  if (num1Str.length !== num2Str.length) {
    return false
  }
  // loop that creates key/value pair for each number and keeps track of count
  for (let i = 0; i < num1Str.length; i++) {
    if (!num1Obj[num1Str[i]]) {
      num1Obj[num1Str[i]] = 1
    } else {
      num1Obj[num1Str[i]] += 1
    }
    if (!num2Obj[num2Str[i]]) {
      num2Obj[num2Str[i]] = 1;
    } else {
      num2Obj[num2Str[i]] += 1
    }
  }
  // loop that checks to see if objects are 'equal'
  for (num in num1Obj) {
    if (num1Obj[num] !== num2Obj[num]) {
      return false
    }
  }
  // if it gets to this piont its true
  return true
}

// could loop through the first arary and create object and then you looop through second string and check to see if each  number is in object
// if object is in object then subtract one from its value 
// for (let i = 0; i < num2Str.length; i++) {
    // let number = num2Str[i];
    // if (!num1Obj[number]) { - will return a falsey value if 0 or less
        // return false
    //}
//}    else {
    // num1Obj[number] -= 1
//}

console.log(sameFrequency(182,281)) //true
console.log(sameFrequency(34,14)) //false