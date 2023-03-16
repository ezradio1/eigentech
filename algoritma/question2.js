const getLongestWord = (str) => {
  const init ={ maxLength: 0, longestString: "" }
  const separatedWords = str.split(" ");
  const result = separatedWords.reduce(
    (acc, curr) => {
      if (curr.length > acc.maxLength) {
        return { maxLength: curr.length, longestString: curr };
      } else return acc;
    },
    init
  );

  console.log(`${result.longestString}: ${result.maxLength} character`);
};

const sentence = "Saya sangat senang mengerjakan soal algoritma";
getLongestWord(sentence); // mengerjakan: 11 character
