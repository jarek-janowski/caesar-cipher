// const password = "Przeprogramowani";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const smallAlphabet = [...alphabet];
const bigAlphabet = [...alphabet.toUpperCase()];

function caesar13(password) {
  if (typeof password !== "string" || password === "") {
    throw new Error("Password is not string or it's empty");
  }
  const encrypt = [...password].map((char) => {
    if (smallAlphabet.includes(char)) {
      char = smallAlphabet[(smallAlphabet.indexOf(char) + 13) % 26];
    } else if (bigAlphabet.includes(char)) {
      char = bigAlphabet[(bigAlphabet.indexOf(char) + 13) % 26];
    }
    return char;
  });
  return encrypt.join("");
}

console.log(caesar13("ABCD"));
