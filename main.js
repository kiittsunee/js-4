const encrypt = (text) => {
    let i = 0;
    let nextSymbol = '';
    let result = '';
    let para = '';
    for (i = 0; i < text.length; i += 2) {
      nextSymbol = text[i + 1] || '';
      para = nextSymbol + text[i];
      result = `${result}${para}`;
    }
    console.log(result);
    return result;
  };


encrypt('move');   // 'omev'
encrypt('attack'); // 'taatkc'
encrypt('car!'); // 'ac!r'

// Если длина строки нечётная,
// то последний символ остаётся на своём месте
encrypt('go!'); // 'og!'