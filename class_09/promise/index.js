var a;
new Promise((resolve, reject) => {
    console.log('Initial');
    setTimeout(() => {
    		a = 6;
    		console.log(a, 'a');
    }, 2000);
    if(a > 4) {
    	// resolve();
    }
    else {
    	// reject();
    }
    
})
.then(() => {
        
    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
});
console.log('Hello World from outside promise.');
if(a) {
	console.log(a, 'a');
}