const defaultCoincidences = {
  'function': 'blue',
  'return' : 'blue',
  'whoAmI' : 'red',
}

const newCoincidences = {
  'name' : 'green'
}

const finalCoincidenses = {...defaultCoincidences, ...newCoincidences}
console.log(finalCoincidenses);