function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours <= 8) {
    return Math.round(hours * rate);
  }

  const regularPay = 8 * rate;
  const overtimePay = (hours - 8) * rate * 1.5;

<<<<<<< HEAD
  return Math.round(regularPay + overtimePay);
=======
  return Math.ceil(regularPay + overtimePay);
>>>>>>> 82ba797 (Adjust overtime pay rounding - manguilimotan.dan)
}

module.exports = { isValidShift, calculatePay };