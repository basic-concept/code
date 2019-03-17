let s = Symbol();
console.log(typeof s);


let s1 = Symbol('foo');
let s2 = Symbol('bar');
console.log(s1);
console.log(s2);
console.log(s1.toString());
console.log(s2.toString());


const obj = {
	toString(){
		return 'abc';
	}
};
const sym = Symbol(obj);
console.log(sym);

let mySymbol = Symbol();
// let a = {};
// a[mySymbol] = 'Hello!';

// let a = {
// 	[mySymbol]: 'Hello!'
// }

let a={};
Object.defineProperty(a,mySymbol,{value: 'Hello!'});

console.log(a[mySymbol])


const log = {};
log.levels = {
	DEBUG: Symbol('debug'),
	INFO: Symbol('info'),
	WARN: Symbol('warn')
};
console.log(log.levels.DEBUG,'debug message');
console.log(log.levels.INFO,'info message');


//魔术字符串
const shapeType = {
	triangle: Symbol()
}
function getArea(shape,options){
	let area = 0;
	switch(shape){
		case shapeType.triangle:
		  area = .5*options.width*options.height;
		  break;
	}
	return area;
}
console.log(getArea(shapeType.triangle,{width:100,height:100}));