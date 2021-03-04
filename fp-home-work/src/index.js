import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>FP Home Work</h1>
`;
//Given an array of integer
//Q1.sum of all odd numbers

// function one(num) {
//   let sum;
//   sum = num.filter(n => n % 2 !== 0).reduce((total, a) => total + a, 0);
//   return sum;
// }
// console.log(one([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//Q2.sum of all number at odd indices
// function two(num){
// const sum=num.filter((i)=>i%2===0).reduce((total,a)=>total+a,0)
// return sum
// }
// const num=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(two(num))
//Q3.biggest number in the array
// function three(arr) {
//   const max = Math.max(...arr);
//   return max;
// }
// let b = three([1, 15, 10, 100, 4, 2]);
// console.log(b);
//Q4.numbers divisible by 10
// function four(arr) {
//   let arr1 = Object.values(arr);
//   const filteredArr = arr1.filter(i => i % 10 === 0);
//   return filteredArr;
// }
// const arr = Array.from({ length: 100 }, (v, i) => i + 1);
// console.log(four(arr));
//Q5.Return an array of numbers where odd numbers are incremented by one and even numbes are decremented by one
// function five(arr){
//   const odd=arr.filter((i)=>i%2!==0).map((i)=>i+1)
//   const even=arr.filter((i)=>i%2===0).map((i)=>i-1)
//   const all=`Odd numbers ${odd} Even numbers ${even}`
//   return all
// }
// const arr=Array.from({length:50},(v,i)=>i+1)
// console.log(five(arr))
//Q6.Return an object with sum of all odd numbers and even numbers seperately
// function six(num) {
//   const sumOdd = num.filter(n => n % 2 !== 0).reduce((total, a) => total + a, 0);
//   const sumEven = num.filter(n => n % 2 === 0).reduce((total, a) => total + a, 0);
//   return {"Odd":sumOdd,"Even":sumEven};
// }
// const arr=Array.from({length:50},(v,i)=>i+1)
// console.log(six(arr))

//Given an array of strings
//Q1.Find the number of strings with similar number of characters
// function one(str) {
//   const obj = {};
//   str.forEach((item) => {
//     if (obj[item.length]) {
//       return obj[item.length] += 1;

//     }
//     obj[item.length] = 1;
//   });
//   return obj;
// }
// const input = ["apple", "orange", "mango", "papaya"];
// console.log(one(input));
//Q2.Return an array with strings which have vowels
// function two(str) {
//   const vowels = /[aeiou]/gi;
//   const result = str.filter(item => {
//     let temp = item.match(vowels);
//     return temp !== null && temp.length > 0;
//   });
//   return result;
// }
// const str = ["apple", "orange", "mango", "papaya"];

// console.log(two(str));

//Q3. Return an array of objects with key as item and value as number of characters in the string
// function three(str) {
//   const result = [];
//   str.forEach(key => {
//     key.split("").forEach(value => {
//       result.push({ item: value });
//     });
//   });
//   return result;
// }
// const str = ["apple"];
// console.log(three(str));

//The one homework
// const cube = (num) => num * num * num;
// const square = (num) => num * num;
// const compose = (...functions) => input =>
//   functions.reduce((acc, fn) => fn(acc), input);

// const squareThenCube = compose(square, cube);
// console.log(squareThenCube(3));
