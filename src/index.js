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
      } else {
        encodeNewArr.push(encodeArr[j]);
      }
    }
    for (let m = 0; m < encodeNewArr.length; m++) {
      filteredArr.push(encodeNewArr[m].replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, ''));
    }
    console.log(filteredArr);
    for (let p = 0; p < filteredArr.length; p++) {
      outStr += MORSE_TABLE[filteredArr[p]];
    }
    return outStr;
}

module.exports = {
    decode
}