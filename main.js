// const password = "Przeprogramowani";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const smallAlphabet = [...alphabet];
const bigAlphabet = [...alphabet.toUpperCase()];
const entryInput = document.querySelector(".main__input");
const generateButton = document.querySelector(".main__button");
const result = document.querySelector(".main__result");

function caesar13(toEncrypt) {
  if (toEncrypt === "") {
    alert("Type the word to encrypt.");
    throw new Error("Input is empty!");
  } else if (typeof toEncrypt !== "string") {
    alert("type a word that is a string.");
    throw new Error("Input is not a string!");
  }
  const encrypt = [...toEncrypt].map((char) => {
    if (smallAlphabet.includes(char)) {
      char = smallAlphabet[(smallAlphabet.indexOf(char) + 13) % 26];
    } else if (bigAlphabet.includes(char)) {
      char = bigAlphabet[(bigAlphabet.indexOf(char) + 13) % 26];
    }
    console.clear();
    return char;
  });
  return encrypt.join("");
}

generateButton.addEventListener("click", () => {
  result.innerHTML = caesar13(entryInput.value);
});
