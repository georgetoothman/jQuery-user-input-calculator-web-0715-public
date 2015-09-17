'use-strict';
$(function(){

  var calculator = new Calculator();

});

function Calculator() {
  $('#equals').click(function(){
    var num1 = parseInt($('#number1').val());
    var num2 = parseInt($('#number2').val());
    var operator = $('#operation').val();

    var validNumber = verifyValidNumbers(num1, num2, function(){
      $('#result').text('Sorry, one of those is not a valid number!')
    });

    var validOperator = verifyOperator(operator, function(){
      $('#result').text('Sorry, not a valid operation!')
    });

    if(validNumber && validOperator){
      doMath(num1, num2, operator, function(result){
        $('#result').text(result);
      });
    }
  })
}

function verifyValidNumbers(num1, num2, callback){
  var num1Valid = numberValid(num1, callback);
  var num2Valid = numberValid(num2, callback);
  return num1Valid && num2Valid;
};

function operators(){
  return {
    '+': function(num1, num2){
      return num1 + num2;
    },
    '-': function(num1, num2){
      return num1 - num2;
    },
    '/': function(num1, num2){
      return num1 / num2;
    },
    '*': function(num1, num2){
      return num1 * num2;
    }
  };
}

function doMath(num1, num2, operator, callback) {
  var result = operators()[operator](num1, num2);
  callback(result);
}

function verifyOperator(operator, callback){
  if(!operators()[operator]){
    callback();
    return false;
  }
  return true;
}

function numberValid(value, callback) {
    if(!parseInt(value)){
    callback();
    return false;
  }
  return true
}