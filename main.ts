
console.log("helo world");
console.log("Sherry");

let myname = "Sherry Bhatti";  // " " , ' ' , ` `  
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

let age:number = 18; // sana
console.log(age); 
 age = 20; // sara
 age = 25; // my

console.log(age); 
 
// type inference

let myfriend:string = "Iqra";
console.log(myfriend);
let myfriend1 = "saba"
let myfriend2 = "sadia"
//let myfriends = myfriend1 + " " + myfriend2  // concatenation
//console.log(myfriends);

// type literals
console.log(`${myfriend1} is my friend and ${myfriend2} is my old friend.`);

//Modules     Building parts   code ko dfrrnt parts me devide krty hen

//  Today Topic
// Arthmatic Operators new topic
let num = 2+5
console.log(num);
let x = 2
let y = 5
let z = (x+y);
console.log(z);

let o = 2+4
o *= 2
console.log(o);

//exponentation
let p = 2 ** 5
console.log(p);
// modules
let n = 6 % 2 // 0 reminder return krta h
console.log(n);

// unary operators ++ , --
// increaments or decreament 1
let l = 7;
l++
++l
console.log(l);

let i = 5
i--
--i
console.log(i);

let g = 7;
let f = 5;
let h = g++ + f-- + ++g + --g + --f + ++f
console.log(h);

let m = 6;
++m +1 +6
m++ +6 +1
console.log(m++);
console.log(m);

// combining operators BODMAS brakets open division multiplication addition subtraction


let A = 2*5-4+3/3+(2+2);
console.log(2*5-4+3/3+4);
console.log(2*5-4+1+4);
console.log(10-4+5);  
console.log(10+1); //11
// BMI calculator      bmi formula = weight/(hight*hight) 
let weight = 80;
let hight = 90;
let bmi = weight / (hight ** hight);
console.log(bmi)  //0.
console.log(bmi.toFixed(5));

// comparison operators
// == , != , > , < , >= , <= ===
let friend = "saba"
let newfriend = "iqra"

console.log(friend != newfriend); // false  // true!=
let number1 = 10;
let number2 = 20;

let number3 = number1 => number2 // false // true
console.log(number3);

let result =typeof friend === typeof number1 //false
console.log(result);

// logical operators
// &&  = and , || = or , ! = not
// && is me 1 b false ho to sary false hon gy
// || is me 1 b true hoga to sb true hon gy
// ! ye result ko ult kr deta true ko false or false ko true kr deta

let friend4 = "saba";
let friend5 = "iqra";
let number4 = 30;
let number5 = 40;
let result1 = friend4 == "saba" || number4 > number5 || friend5 == "iqra"  || number4 < number5 //true
console.log(result1);
console.log(!result1);


let weather = "rainy";
let weather2 = "sunny";
let age1 = 20;
let age2 = 24;
let result2 = weather == "rainy" && age1 > age2 // false
console.log(result2);
console.log(!result2);






































//console.log(`your BMI is ${bmi}`); ye b likh skty hen
