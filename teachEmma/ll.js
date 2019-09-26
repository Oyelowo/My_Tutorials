const createCard1 = (xCount, yCount) => {
  let string = '';
  for (let y = 1; y <= yCount+1; y++) {
    string += '\n';
    for (let x = 1; x <= xCount+1; x++) {
      if (y % 2 === 0 && x % 2 === 0) {
        string += '# ';
      } else if (x % 2 === 0) {
        string += ' #';
      }
    }
  }
  return string;
};

const createCard = (xCount, yCount) => {
  let string = '';
  for (let i = 0; i < yCount; i++) {
    string += `${Array(xCount)
      .fill(i % 2 === 0 ? ' #' : '# ')
      .join('')
      .slice(0, xCount)}\n`;
  }
  return string;
};

console.time('fi');
console.log(createCard(9, 9));    
console.timeEnd('fi');
 