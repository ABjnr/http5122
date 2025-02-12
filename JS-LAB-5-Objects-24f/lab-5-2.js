//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!

var customer1292 = {
  lastName: "Freddy",
  branchNumber: 83,
  accountBalance: 500.25,
  interestRate: 1.03,
  multipleAccounts: true,
  makeDeposit: function (amountAdded) {
    customer1292.accountBalance = parseFloat(
      (customer1292.accountBalance + amountAdded).toFixed(2)
    );

    return `Thank you, your current balance is now $${customer1292.accountBalance}`;
  },
  makeWithdrawal: function (amountWithdrawn) {
    customer1292.accountBalance = parseFloat(
      (customer1292.accountBalance - amountWithdrawn).toFixed(2)
    );

    return `Thank you, your current balance is now $${customer1292.accountBalance}`;
  },
  addInterest: function () {
    if (customer1292.multipleAccounts === true) {
        var newInterestRate = customer1292.interestRate + 0.005;
  
        customer1292.accountBalance = parseFloat(
          (customer1292.accountBalance * newInterestRate).toFixed(2)
        );
  
        return `Thank you, your current balance is now $${customer1292.accountBalance}`;
      } else {
        customer1292.accountBalance = parseFloat(
        (customer1292.accountBalance * customer1292.interestRate).toFixed(2)
      );
      return `Thank you, your current balance is now $${customer1292.accountBalance}`;
      }
  },
//   hasMultipleAccounts: function () {
//     if (customer1292.multipleAccounts === true) {
//       var newInterestRate = customer1292.interestRate + 0.005;

//       customer1292.accountBalance = parseFloat(
//         (customer1292.accountBalance * newInterestRate).toFixed(2)
//       );

//       return `Thank you, your current balance is now $${customer1292.accountBalance}`;
//     } else {
//       customer1292.accountBalance = parseFloat(
//       (customer1292.accountBalance * customer1292.interestRate).toFixed(2)
//     );
//     return `Thank you, your current balance is now $${customer1292.accountBalance}`;
//     }
//   },
};

console.log(`Starting balance: $${customer1292.accountBalance}`);
console.log(customer1292.makeDeposit(200));
console.log(customer1292.makeWithdrawal(75));
console.log(customer1292.addInterest());
// console.log(customer1292.hasMultipleAccounts());
