var num,num1,num2,operate,bj;
var readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', function(line) {
  num=(line);
  bj=num.search(' ');
  num1=Number(num.substr(0,bj));
  operate=num.substr((bj+1),1);
  num2=Number(num.substr((bj+3),1));
  switch(operate){
	case '+':console.log(num1+num2);break;
	case '-':console.log(num1-num2);break;
	case '*':console.log(num1*num2);break;
	case '/':console.log(num1/num2);break;
	}

});
