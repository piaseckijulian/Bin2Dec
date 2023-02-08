const binaryInput = document.querySelector('#binary');
const decimalDiv = document.querySelector('#decimal');
const form = document.querySelector('form');

const bin2dec = () => {
  let decimals;
  let binArray = binaryInput.value.split('');

  binArray = binArray.map((bin) => parseInt(bin));

  let binArrayIndex = -1;
  let bin2decPower = binArray.length;

  for (const binNumber of binArray) {
    binArrayIndex += 1;
    bin2decPower -= 1;

    binArray[binArrayIndex] = binNumber * 2 ** bin2decPower;
  }

  decimals = binArray.reduce((a, b) => a + b);

  decimalDiv.innerText = `Decimal Number: ${decimals}`;
};

form.onsubmit = (event) => {
  event.preventDefault();
  bin2dec();
};
