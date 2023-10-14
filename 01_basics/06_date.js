// // let myDate=new Date;
// // console.log(myDate.toString());

// // console.log(myDate.toDateString());
// // ;
// // console.log(myDate.toJSON());
// // ;
// // console.log(myDate.toLocaleString());
// // ;
// // console.log(typeof myDate);
let mycreatedDate=new Date(2023,0,23,5,3);
console.log(mycreatedDate.toDateString());

console.log(mycreatedDate.toLocaleString());

let newdate=new Date('01-23-2023');
console.log(newdate.toDateString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(mycreatedDate.getTime());

// for calculating second
console.log(Math.floor(Date.now()/1000));
