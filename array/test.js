function person(name,age,phone,Email){
    return{
        firstname:name,
        age:age,
        phone:phone,
        Email:Email,
    }
}
let person1=person("preeti",1234567890,"preeti@gmail.com");
let person2=person("Alka",2351678459,"Alka@gmail.com");
let person3=person("priyanka",9876549823,"priyanka@gmail.com");
let person4=person("Arti",9876578965,"Arti@gmail.com");

let arr=[person1,person2,person3,person4];
function search(name){
    let person = arr.find(Element=>Element.name===)
}