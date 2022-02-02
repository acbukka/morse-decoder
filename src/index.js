const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----': '0',
    '**********': ' '
};

function decode(encode) {
    let encodeArr = [];
    let encodeNewArr = [];
    let filteredArr = [];
    let outStr = '';
    for (let i = 0; i < encode.length; i += 10) {
      encodeArr.push(encode.substring(i, i + 10));
    }
    for (let j = 0; j < encodeArr.length; j++) {
      if (encodeArr[j].length < 10) {
        encodeNewArr.push(encodeArr[j].padStart(10, '0'));
        console.log(encodeArr[j].length);
      } else {
        encodeNewArr.push(encodeArr[j]);
      }
    }
    console.log(encodeNewArr);
    for (let m = 0; m < encodeNewArr.length; m++) {
      filteredArr.push(encodeNewArr[m].replaceAll('10', '.').replaceAll('11', '-').replaceAll('0', ''));
    }
    console.log(filteredArr);
    for (let p = 0; p < filteredArr.length; p++) {
      outStr += MORSE_TABLE[filteredArr[p]];
      console.log(outStr);
    }
    return outStr;
}

module.exports = {
    decode
}