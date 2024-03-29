function timerPromisefy(delay){
	return new Promise(function (resolve){
		setTimeout(function(){
			resolve(delay);
		},delay);
	})
}

var startDate = Date.now();
console.log(startDate);
Promise.race([
	timerPromisefy(1),
	timerPromisefy(32),
	timerPromisefy(64),
	timerPromisefy(128)
]).then(function(value){
	console.log(value)
})