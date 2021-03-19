const object = {
  person: { name: 'Max', age: 28 },
  hobbies: { sport: 'Football', game: 'Call of Duty' },
  food: { asian: 'Pad Thai', mexican: 'Birria Taco', american: 'Hamburgers' }
  }
// without internet help
function objTransform(object) {
  let values = Object.values(object);
  let newArray = []
  for (let i = 0; i < values.length; i++) {
    newArray.push(values[i])
  }
  return newArray
}

function objTransform3(object) {
  return Object.values(object)
}

// second solution using internet help
function objTransform2(object) {
  let newArray = [];
  for (value in object) {
    newArray.push(object[value])
  }
  return newArray;
}