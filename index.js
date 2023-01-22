const bin = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const dec = document.getElementById('decimal');

const bin2dec = () => {
  const binValue = bin.value;

  if (
    binValue.length >= 4 &&
    Number(binValue) % 1 === 0 &&
    !binValue.includes('2') &&
    !binValue.includes('3') &&
    !binValue.includes('4') &&
    !binValue.includes('5') &&
    !binValue.includes('6') &&
    !binValue.includes('7') &&
    !binValue.includes('8') &&
    !binValue.includes('9')
  ) {
    let decimals;
    let binArray = binValue.split('');

    binArray = binArray.map((bin) => parseInt(bin));

    let binArrayIndex = -1;
    let bin2decPower = binArray.length;

    for (const binNumber of binArray) {
      binArrayIndex += 1;
      bin2decPower -= 1;

      binArray[binArrayIndex] = binNumber * 2 ** bin2decPower;
    }

    decimals = binArray.reduce((a, b) => a + b);

    dec.innerText = `Decimal Number: ${decimals}`;
  } else {
    dec.innerText = '⛔ Error!';
  }
};

submitBtn.onclick = () => bin2dec();
