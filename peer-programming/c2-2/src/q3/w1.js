var sentence = 'Welcome to neoG Camp!'

const reverseBySeparator = (sentence, separator) =>
  sentence
    .split(separator)
    .reverse()
    .join(separator)

console.log(reverseBySeparator(sentence, ''))
