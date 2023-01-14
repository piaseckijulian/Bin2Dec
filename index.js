const bin = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const dec = document.getElementById('decimal');

const bin2dec = () => {
  if (bin.value.includes(0) || bin.value.includes(1)) {
    let decimals;
    let binArray = bin.value.split('');

    binArray = binArray.map((bin) => parseInt(bin));

    let binArrayIndex = -1;
    let bin2decPower = binArray.length;

    for (const bin of binArray) {
      binArrayIndex += 1;
      bin2decPower -= 1;

      binArray[binArrayIndex] = bin * 2 ** bin2decPower;
    }

    decimals = binArray.reduce((a, b) => a + b);

    dec.innerText = `Decimal Number: ${decimals}`;
  } else {
    dec.innerText = 'You entered number other than 0 and 1';
  }
};

submitBtn.onclick = () => bin2dec();
