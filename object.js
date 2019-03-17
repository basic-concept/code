// object
一、创建对象
1、工厂模式:无法进行对象识别
function createPerson(name,age,job){
	var o = new object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name)
	};
	return o;
}
var person1 = createPerson("Nicholas",29,"Software Engineer")
var person2 = createPerson("Greg",27,"Doctor")
注意：没有new

2、构造函数模式
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert(this.name)
	}
}

var person1 = new Person("Nicholas",29,"Software Engineer")
var person2 = new Person("Greg",30,"Software Engineer")

var person1 = new Person(……)
alert(person1.constructor == Person) //true


3、原型模式
function Person(){

}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
}

var person1 = new Person();
person1.sayName() // "Nicholas"

var person2 = new Person();
person2.sayName() // "Nicholas"
alert(person1.sayName() == person2.sayName())

4、组合构造函数函数和原型模式
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["Shellby","Count"]
}
Person.prototype = {
	constructor: Person,
	sayName: function(){
		alert(this.name);
	}
}
var person1 = new Person("Nicholas",29,"Software Engineer")
var person2 = new Person("Greg",30,"Software Engineer")

person1.friends.push("Van");
alert(person1.friends) // "Shellby,Count,Van"
alert(person2.friends) // "Shellby,Count"
alert(person1.friends === person2.friends) // false
alert(person1.sayName === person2.sayName) // true

5、动态圆形模式
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	if (typeof this.sayName != "function"){
		Person.prototype.sayName = function(){
			alert(this.name);
		}
	}
}

6、寄生构造函数模式
类似于工厂模式
function Person(name,age,job){
	var o = new object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name)
	};
	return o;
}
var friend = new Person("Nicholas",29,"Software Engineer")
friend.sayName()

7、稳妥构造函数模式
function Person(name,age,job){
	var o = new Object();
	o.sayName = function(){
		alert(name);
	}

	return o;
}
var friend = Person("Nicholas",29,"Software Engineer");
friend.sayName(); // "Nicholas"
除了sayName()方法，没有其他办法访问name的值