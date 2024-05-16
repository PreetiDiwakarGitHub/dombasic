
// let div = document.querySelector("div");

// console.log(div);

// let value = div.getAttribute("id");
// console.log(value);

// let para = div.querySelector("p");
// console.log(para.setAttributeAttribute("class"))

// document.body.style.backgroundColor = "red";

// document.body.childNodes

// let user = document.body.childNodes[1].childNodes;
// console.log(user)


// let user = document.body.childNodes[1]
// let person = user.firstChild;
// console.log(person);

// let user = document.body.childNodes[1]
// let person = user.lastChild;
// console.log(person);


// let colour = document.body.childNodes[1].lastElementChild.style.color = "green"
// console.log(colour);


// let colour = document.body.childNodes[1].lastElementChild.style.backgroundColor = "pink"
// console.log(colour);


// let user = document.body.firstElementChild.children;
// console.log(user);

// let user = document.body.firstElementChild.children[2];
// console.log(user);


// let user = document.body.firstElementChild.children[2].nextElementSibling;
//  console.log(user);


// let user = document.body.firstElementChild.children[3].previousElementSibling;
//  console.log(user);


// let user = document.body.firstElementChild.children[3].previousSibling;
//   console.log(user);


// let user = document.body.childNodes[1].lastElementChild.parentElement.style.backgroundColor = "green";
// console.log(user);

// let table = document.body.children[1];
// console.log(table);


// let table = document.body.children[1].tbody;
//  console.log(table);


// let boxs = document.getElementsByClassName("box");
// console.log(boxs);


// let boxes = document.getElementsByClassName("box");
//  console.log(boxs);

//  boxes[1].style.backgroundColor = "red"


// let boxes = document.querySelector(".box").Style.backgroundColor = "green";
// console.log(boxes);


// let boxes = document.querySelector(".box");
// boxes.style.backgroundColor = "green";
// console.log(boxes);


// let boxes = document.querySelectorAll(".box").forEach(
//     elem=>{                                                          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//         elem.backgroundColor = "green";
//     }
// )
// console.log(elem);


// let e = document.getElementsByTagName("div");
// e[3].matches(".box");
// console.log(e);


// let e = document.getElementsByTagName("div");
//  e[3].closest(".box");
//  console.log(e);


// let e = document.getElementsByTagName("div");
//  e[3].closest(".mainbox");
//  console.log(e);


// let e = document.querySelector(".mainbox").contains(e[0]);  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// console.log(e);

// let text = document.querySelector(".box");
// console.log(text);


// let p = document.querySelector(".box").innerHTML;
// console.log(p);


// let p = document.querySelector(".mainbox").innerHTML;
// console.log(p);

// let p = document.querySelector(".mainbox").innerText;
// console.log(p);


// let a = document.querySelector(".mainbox").innerHTML;
// console.log(a);

// let e = document.querySelector(".mainbox").hidden = true;
// console.log(e);


// let p = document.querySelector(".mainbox").hidden = false;
// console.log(p);

// let e = document.querySelector(".box").innerHTMl = " I am a box";    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// console.log(e);

// let e = document.querySelector(".box");
// e.innerHTML = "I am a box";
// console.log(e);


// let fragment = new DocumentFragment();
// let languages = ['html','css','javaScript'];
// let langel = document.querySelector('#language');
 
// languages.forEach((language)=>{
//     let li = document.createElement('li');
//     li.innerHTML = language;
//     fragment.appendChild(li);
// }
// );
// langel.appendChild(fragment);

let lang = document.querySelector("#language");
let languages = ["c",'c++','python','java'];

const items = languages.map((language)=>{
    const li = document.createElement('li');
    li.innerHTML = language;
    return li;
})

lang.lastChild.after(...items);