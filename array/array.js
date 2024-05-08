// console.log(Math.round(3,4));
// console.log(Math.ceil(3.9));
// console.error(Math.floor(-3.6));
// console.log(Math.trunc(2.1));


// let arr="my name preeti diwakar";
// console.log(arr.indexOf("name"));

// let arr="this is a array code";
// console.log(arr.startsWith("this"));

// let arr="this is a pen"
// console.log(arr.replace('this','that'));

// let arr=["preeti","alka","mahima"];
// console.log(arr.push("komal"));

// let arr=["preeti","priya","priyanka","kopal"]
// let p=arr.push("komal");
// console.log(arr);

// let arr=["preeti","priya","alka","mahima"];
// let b=arr.pop();
// console.log(arr);

// let arr=["preeti","priya","Alka","mahima"];
// let b=arr.splice(0,2);
// console.log(arr);

// let arr=["preeti","priya","kopal","arti"];
// let b=arr.splice(0,0,"paras");
// console.log(arr);

// let arr=[20,16,27,18];
// function age(){
//     let k=arr.find(function(e){
//         if(e>18){
//             return e;
//         }
//     });
//     console.log(k);
// }
// age();


// let arr=[1,2,3,4,5,6];
// function age(){
//     let p=arr.find(function(e){
//         if(e>3){
//             return e;
//         }

//     });
//     console.log(p)
// }
// age();


// let arr=[12,34,56,12,23];
// function age(){
//     let p=arr.findIndex(function(e){
//         if(e>=23){
//             return e;
//         }
    
//     }

//     )
//     console.log(p);
// }
// age();


// let arr=[12,23,45,56,];
// function age(){
//     let p=arr.find(
//         function(b){
//             if(b>=18){
//                 return b
//             }
//         }
//     )
//     console.log(p);
// }
// age();

// let arr=["preeti","priya","paras","arti"];
// console.log(arr.join(" and "));

// let arr=[1,2,3,4,5,6,7];
// function user(x){
//     return(x*2);
// }
// console.log(arr.map(user));

// let arr=[1,2,3,4,5,6,7,8];
// function user(x){
//     return(x%2==0);
// }
// console.log(arr.filter(user));

// let arr=[1,2,3,4,5];
// let user=arr.reduce((num,num1)=>{
//     return(num+num1);
// }
// )
// console.log(user);


// let user=(name)=>{
//     console.log(`hello ${name}`)
// }
// setTimeout(user,500,"perrti");

// shallow copy

// let user={
//     first:"preeti",
//     last:"diwakar",
//     age:20,
// }
// let person=Object.assign({},user);
// person.first="priyanka";
// console.log(person);


// function user(first,last,age){
//     this.firstname=first;
//     this.lastname=last;
//     this.age=age;
// }
// let person= new user("preeti","diwakar",19);
// console.log(person);


// function user(first,last,age){
//     return{
//         firstname:first,
//         lastname:last,
//         age:age,
//     }
// }
// let person=user("preeti","diwakar",19);
// console.log(person);


// let user=[1,2,3,4,5,6,7];
// function user1(x){
//     return(x*2);
// }
// console.log(user.map(user1));

// let arr=[1,2,3,4];
// let user=arr.reduce((num,num1)=>{
//     return(num+num1);
// }

// )
// console.log(user);

