//Front End//







//Back End//
function Account(initialDeposit, name){
  this.balance = initialDeposit,
  this.name = name
}

Account.prototype.withdrawal(amount){
  this.balance -= amount;
  return this.balance;
}

Account.prototype.deposit(amount){
  this.balance += amount;
  return this.balance;
}
