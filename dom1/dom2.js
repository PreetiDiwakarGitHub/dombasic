let massage = document.querySelector('.massage');
// // let style = getComputedStyle(massage);
// // console.log(style.color);

// let style = getComputedStyle(massage,'::first-letter');
// console.log(style.color,style.fontSize);

// massage.classList.add("new-class","new-class2","new-class3");
// console.log(massage.className);

// let check = massage.classList.contains("new-class4");
// console.log(check);


// let check = massage.classList.contains("new-class2");
// console.log(check);


// let box = document.querySelector('.box');
// let width = box.offsetWidth;
// let height = box.offsetHeight;
// console.log(width,height);


// let box = document.querySelector('.box');
// let width = box.clientWidth;
// let height = box.clientHeight;
// console.log(width,height);


// let home = document.querySelector('#home');
// home.addEventListener('click',function(e){
//     console.log('home clicked');
// });

// let about = document.querySelector('#about');
// about.addEventListener('click',function(e){
//     console.log('about clicked');
// });

// let Services = document.querySelector('#Services');
// Services.addEventListener('click',function(e){
//     console.log('Services clicked');
// });


let list = document.querySelector('#list');
list.addEventListener('click',function(e){
    switch (e.target.id){
        case 'home':
            console.log('home clicked');
            break;
        case 'about':
            console.log('about clicked');
            break;
        case 'Services':
            console.log('Services clicked');
            break;    
            
      }
});
