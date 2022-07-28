var sentence = 'Welcome to neoG Camp!'
// ! forgot unshift --> use push
const getReverseWord = str => {
  let revStr = ''
  for (let i = 0; i < str.length; i++) {
    revStr += str[str.length - i - 1]
  }
  return revStr
}
const getReverse = arr => {
  let reverse = []
  for (let i = 0; i < arr.length; i++) {
    reverse.unshift(getReverseWord(arr[i]))
  }
  return reverse.join(' ')
}
const result = getReverse(sentence.split(' '))
console.log(result)
