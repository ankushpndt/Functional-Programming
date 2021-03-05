import "./styles.css";
import fakeFetch from "./fakeFetch";
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/*
Q1.Write a function `strLength()` which takes 
1. Your name
2. A function which it will call with the length of your name
*/
// const strLength=(name,callback)=>{
//  const nameLength=name.length;
//   callback(nameLength);
// }
// strLength("Ankush", function callback(nameLength){console.log(`OMG! my name is ${nameLength} char long!`)})

/*
Q2.Write a function `willThanosKillMe()` . This function will take three parameters
1. Your name
2. Function to call if Thanos doesn't kill you.
3. Function to call if Thanos does kill you.

This function will call success callback if your name has even characters. You won't die. 

But if your name has odd number of characters then you're going to die. Sorry! :(

Now, call this function with given parameters. The success function should console a happy message: `Yay! I am alive!` and the failure function should console your will: `Give my bose speakers and headphones to my sister`
*/
// const willThanosKillMe = (name, success, failure) => {
//   let nameLength = name.length;
//   if (name.length % 2 === 0) success(nameLength);
//   else failure(nameLength);
// };

// const success = (nameLength) => {
//   console.log("alive");
// };
// const failure = (nameLength) => {
//   console.log("dead");
// };
// willThanosKillMe("nkush", success, failure);
// setTimeout

/*
Now, write a function which takes a message and a delay and print that message after the delay.
*/
// const delay=(msg)=> setTimeout(()=>console.log(msg),2000)
// delay("Hello")

// setInterval - HW
/* 
- learn how setInterval works
- write a function which takes a message and time. The function should print that message every X interval.
*/

// const a = setInterval(() => console.log("testing"), 5000);
// clearInterval(a);
// - Write a function which takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!"
// const num = (n) => {
//   let interval = setInterval(() => {
//     console.log(--n);
//     if (num === 0) {
//       console.log("Bang Bang");
//       clearInterval(interval);
//     }
//   }, 1000);
// };

// num(5);

//Promises
//Q1.print data on success, print error on failure
// fakeFetch("success", true)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

/*
Q2.Create a function `getServerResponseLength(msg)` This function will use `fakeFetch()` internally  with the message and return the length of the response received by server.

Note: Instead of returning the response from server this should return the length.

Hint:  It will return in a promise.
*/

// Promise CHAINING
// const getServerResponseLength = (msg) => {
//   return fakeFetch(msg.length)
//     .then((data) => `${data}`)
//     .then((msg) => console.log(msg));
// };
// getServerResponseLength("hello");

/* 
Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.
*/

// const syncCallsToServer = (msg1, msg2) => {
//   fakeFetch(msg1).then((data) => console.log(data));
//   return fakeFetch(msg2).then((data2) => console.log(data2));
// };
// syncCallsToServer("hi","bye")

//async and await
// Call fakeFetch() with some msg and use await to get the data and then print it.
// const fun = async ()=> {
//   let msg = await fakeFetch("hello")
//   console.log(msg)
// }
// fun();

// const waterFall = async (msg1, msg2) => {
//   const a = await fakeFetch(msg1);
//   console.log(a);
//   const b = await fakeFetch(msg2);
//   console.log(b);
// };
// waterFall("hi", "hello");
// const fun = async (msg) => {
//   try {
//     const a = await fakeFetch(msg, true);
//     console.log(a);
//   } catch (err) {
//     console.error(err);
//   }
// };
// fun("a");

//Q.print data on success, print error on failure using async and await
// const data = async () => {
//   try {
//     const response = await fakeFetch("success", false);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
// data();

/*
Q.Create a function `getServerResponseLength(msg)` This function will use `fakeFetch()` internally  with the message and return the length of the response received by server.

Note: Instead of returning the response from server this should return the length.

(using async and await)
*/

// const getServerResponseLength = async (msg) => {
//   try {
//     const response = await fakeFetch(msg, false);
//     console.log(response.length);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getServerResponseLength("hello");
// ********************END*****************************

// const promise1 = () => new Promise((resolve, reject) => resolve("yo"));
// const promise2 = (msg) =>
//   new Promise((resolve, reject) => resolve("yo1 " + msg));
// // promise1()
// // .then((result)=> {
// //   return promise2(result)
// // })
// // .then((result)=>console.log(result))
// Promise.all([promise1(), promise2()]).then(() => console.log("all finished"));
// Promise.race([promise1, promise2]).then(() =>
//   console.log("one of them finished")
// );
