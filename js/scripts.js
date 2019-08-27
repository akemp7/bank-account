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
    $(".funds").submit(function(event){
      event.preventDefault();
      var deposit = parseInt($("input#depositamount").val());
      var withdrawal = parseInt($("input#withdrawal").val());
      if(deposit){
        myAccount.deposit(deposit);
      }
      if (withdrawal) {
      myAccount.withdrawal(withdrawal);
    }
    $("#balance").text(myAccount.balance);
    $(".funds").trigger("reset");
    });
    $(".newaccount").trigger("reset");
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
