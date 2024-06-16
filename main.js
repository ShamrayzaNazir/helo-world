console.log("helo world");
console.log("Sherry");
var myname = "Sherry Bhatti"; // " " , ' ' , ` `  
console.log(myname);
// premative data type     1 information store krti
// string
// number
// boolean
//undefined
// null
// symbol
// bigint
// non pre me ziada store hoti h , multipuls information 
// functions
// array
// objects
// var let const
// var use ni krty ku k ye 1 name k ziada dby bnany ki ijazt de deta
// let 1 name se ziada dby bnany ni deta
// const value same rhy gi kuj b change ni hoga
var age = 18; // sana
console.log(age);
age = 20; // sara
age = 25; // my
console.log(age);
// type inference
var myfriend = "Iqra";
console.log(myfriend);
var myfriend1 = "saba";
var myfriend2 = "sadia";
//let myfriends = myfriend1 + " " + myfriend2  // concatenation
//console.log(myfriends);
// type literals
console.log("".concat(myfriend1, " is my friend and ").concat(myfriend2, " is my old friend."));
//Modules     Building parts   code ko dfrrnt parts me devide krty hen
//  Today Topic
// Arthmatic Operators
var num = 2 + 5;
console.log(num);
var x = 2;
var y = 5;
var z = (x + y);
console.log(z);
var o = 2 + 4;
o *= 2;
console.log(o);
//exponentation
var p = Math.pow(2, 5);
console.log(p);
// modules
var n = 6 % 2; // 0 reminder return krta h
console.log(n);
// unary operators ++ , --
// increaments or decreament 1
var l = 7;
l++;
++l;
console.log(l);
var i = 5;
i--;
--i;
console.log(i);
var g = 7;
var f = 5;
var h = g++ + f-- + ++g + --g + --f + ++f;
console.log(h);
var m = 6;
++m + 1 + 6;
m++ + 6 + 1;
console.log(m++);
console.log(m);
// combining operators BODMAS brakets open division multiplication addition subtraction
var A = 2 * 5 - 4 + 3 / 3 + (2 + 2);
console.log(2 * 5 - 4 + 3 / 3 + 4);
console.log(2 * 5 - 4 + 1 + 4);
console.log(10 - 4 + 5);
console.log(10 + 1); //11
// BMI calculator      bmi formula = weight/(hight*hight) 
var weight = 80;
var hight = 90;
var bmi = weight / (Math.pow(hight, hight));
console.log(bmi); //0.
console.log(bmi.toFixed(5));
// comparison operators
// == , != , > , < , >= , <= ===
var friend = "saba";
var newfriend = "iqra";
console.log(friend != newfriend); // false  // true!=
var number1 = 10;
var number2 = 20;
var number3 = function (number1) { return number2; }; // false // true
console.log(number3);
var result = typeof friend === typeof number1; //false
console.log(result);
// logical operators
// &&  = and , || = or , ! = not
// && is me 1 b false ho to sary false hon gy
// || is me 1 b true hoga to sb true hon gy
// ! ye result ko ult kr deta true ko false or false ko true kr deta
var friend4 = "saba";
var friend5 = "iqra";
var number4 = 30;
var number5 = 40;
var result1 = friend4 == "saba" || number4 > number5 || friend5 == "iqra" || number4 < number5; //true
console.log(result1);
console.log(!result1);
var weather = "rainy";
var weather2 = "sunny";
var age1 = 20;
var age2 = 24;
var result2 = weather == "rainy" && age1 > age2; // false
console.log(result2);
console.log(!result2);
//console.log(`your BMI is ${bmi}`); ye b likh skty hen
