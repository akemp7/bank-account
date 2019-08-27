//Front End//
$(document).ready(function(){
  $(".newaccount").submit(function(event){
    event.preventDefault();
    var nameInput= $("input#name").val();
    var initialInput = parseInt($("input#initialdeposit").val());
    var myAccount = new Account(initialInput, nameInput);
    $(".output").show();
    $("#balance").text(myAccount.balance);
    $("#user").text(myAccount.name);
    $(".funds").show();

  });
});






//Back End//
function Account(initialDeposit, name){
  this.balance = initialDeposit,
  this.name = name
}

Account.prototype.withdrawal = function(amount) {
  this.balance -= amount;
  return this.balance;
}

Account.prototype.deposit = function(amount){
  this.balance += amount;
  return this.balance;
}
