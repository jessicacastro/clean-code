const THIRTY_MINUTES = 1000 * 60 * 30; 

function lookForUpdades() {}

setInterval(lookForUpdades, THIRTY_MINUTES)

function calculateDiscount(priceInCents, discountAmountInPercentage) {
  return priceInCents * discountAmountInPercentage / 100;
}