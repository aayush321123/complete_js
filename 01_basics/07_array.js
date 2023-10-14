// const myArr=[1,3,2,5];
// console.log(myArr);

// const myArr2=new Array(2,5,1,23);
// console.log(myArr);

// myArr.push(12);
// myArr.push(10);
// myArr.pop();
// console.log(myArr);

let myArr3= new Array(12,1,2,15);
// console.log(myArr3);
// myArr3.unshift(9);
// console.log(myArr3);
// myArr3.shift();
// console.log(myArr3);
console.log(myArr3.includes(9));
console.log(myArr3.indexOf(12));

const myArr4 =myArr3.join();
console.log(myArr4);
console.log("A",myArr3);
let ans=myArr3.splice(1,3);
console.log("B",ans);
myArr3.shift();
myArr3.unshift(0);
console.log(myArr3);