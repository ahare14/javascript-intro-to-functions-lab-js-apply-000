function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  if ( string === string.toLowerCase() ) {
<<<<<<< HEAD
    return ("I can't hear you!")
  }
  else if ( string === string.toUpperCase() ) {
    return ("YES INDEED!")
=======
    return "I can't hear you!"
  }
  else if ( string === string.toUpperCase() ) {
    return "YES INDEED!"
>>>>>>> 4393e7018684d9ad7fffad0528038e318395b6c4
  }
  else {
    return ("I love you, too.")
}
}
