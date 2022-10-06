function coinsWallet(){
  let savedCoins = 0;

  function countCoins(coins){
    savedCoins += coins
    console.log(`My coins are ${savedCoins}`)
  }
  return countCoins;
}

const myMoney = coinsWallet()
myMoney(5)
myMoney(12)
myMoney(3)

/*
OUT:

My coins are 5
My coins are 17
My coins are 20
*/
