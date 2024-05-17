// console.log(document.title);
// console.log(document.body);
// document.body.style.backgroundColor = "pink"; 

// document.body.childNodes

// document.body.childNodes[1].childNodes

//  let cont = document.body.firstElementChild;
//  console.log(cont);

// let boxes=document.getElementsByClassName("box");
// console.log(boxes);

// document.getElementById("red").style.backgroundColor ="red";

// document.querySelectorAll(".box").forEach(elem=>{
//     console.log(elem);
// }

// )

// document.getElementsByTagName("Div");

// let e = document.getElementsByTagName("Div")
// e[3].matches(".box")
// console.log(e);

// e[1].closest("#red")
// console.log(e)

// let p = document.querySelector(".container").contains(e[2]);
// console.log(p);


// let p= document.querySelector(".box").innerHTML

// document.querySelectorAll(".box").forEach(elem =>
    
// )

// document.querySelector(".box").remove

// document.querySelector(".container").classList;

// document.querySelector(".container").classList.remove("red");

// document.querySelector(".contatner").classList.toggle("red")

// document.querySelector(".contatner").classList.toggle("red")

// document.querySelector(".contatner").classList.toggle("red")

// let list = document.getElementById("list");
// let aboutLi = list.children[1];
// let Newli = document.createElement("li");
// Newli.innerHTML = "Services";
// list.replaceChild(Newli, aboutLi);

// queation 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function takevalue(){
//     let name=document.getElementById("name").value;
//     let password=document.getElementById("password").value;
//     document.write(name+"<br>");
//     document.write(password + "<br>");
// }



// question  2


let btn = document.getElementById('btn');
btn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    let color = ['red', 'green', 'blue', 'orange', 'pink'];
    let randomColor = color[Math.floor(Math.random() * color.length)];
    document.body.style.background = randomColor;
}





// question  3

// let box1 = document.getElementById("box");
// let btn = document.getElementById('btn');
// btn.addEventListener('click', ch);

// function ch() {
//     let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D"];
//     let randomNum1 = num[Math.floor(Math.random() * num.length)];
//     let randomNum2 = num[Math.floor(Math.random() * num.length)];
//     let randomNum3 = num[Math.floor(Math.random() * num.length)];
//     let subarr=[randomNum1,randomNum2,randomNum3].join(' ');
//     box1.innerHTML = subarr;
// }
