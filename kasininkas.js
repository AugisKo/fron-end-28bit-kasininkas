async function kasininkas(price, cash) {
  console.log(`Priimtos kupiuros: ${cash.join(', ')}.`);

  let total = 0;
  for (const number of cash) {
    total += number;
  }

  let answer = '';
  if (total < price) {
    answer = ' Nepakanka pinigu!\n';
  } else if (total === price) {
    answer = 'Aciu, jog pirkote!\n';
  } else {
    answer = `Aciu, jog pirkote! Stai jusu graza - ${total - price} pinigu!\n`;
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(answer);
    }, 2000);
  });
}

module.exports = kasininkas;

/*
async function kasininkas(price, cash) {
  let receivedCash = [];
  cashSum = 0;
  let cashBack = 0;
  let p = '';

  for (i = 0; i < cash.length; i++) {
    receivedCash += i !== cash.length - 1 ? `${cash[i]}, ` : `${cash[i]}`;
    cashSum += cash[i];
  }
  cashBack = cashSum - price;
  if (cashSum < price) {
    p = 'Nepakanka pinigu!';
  } else if (cashSum === price) {
    p = 'Aciu, jog pirkote!';
  } else {
    p = `Aciu, jog pirkote! Stai jusu graza - ${cashBack} pinigu!`;
  }
  console.log(`Priimtos kupiuros: ${receivedCash}`);
}

return new Promise(() => {
  resolve(p);
}, 2000);*/
