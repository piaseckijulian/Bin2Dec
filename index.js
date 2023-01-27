const bin = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const dec = document.getElementById('decimal');

const bin2dec = () => {
  const binValue = bin.value;

  for (const value of binValue) {
    if (Number(value) === 1) continue;
    else if (Number(value) === 0) continue;
    else return;
  }

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
};

submitBtn.onclick = () => bin2dec();
