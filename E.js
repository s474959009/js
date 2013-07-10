var num;
var readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', function(line) {
	num=(line);
	try  {
	console.log(eval(num));
	}
	catch (exception) {
		console.log('请输入：')
	}

});
