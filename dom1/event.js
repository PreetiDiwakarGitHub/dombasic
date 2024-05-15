// let grandparent = document.querySelector('.grandparent');
// let parent = document.querySelector('.parent');
// let child = document.querySelector('.child');

// grandparent.addEventListener("click",()=>{
//     console.log('grandparant bubbing');
// })

// parent.addEventListener("click",()=>{
//     console.log('parent bubbing');

// })

// child.addEventListener("click",()=>{
//     console.log('child bubbing')
// })

// Event Capturing

// grandparent.addEventListener("click",()=>{
//     console.log('grandparant bubbing');
// },{capture:true})

// parent.addEventListener("click",()=>{
//     console.log('parent bubbing');

// },{capture:true})

// child.addEventListener("click",()=>{
//     console.log('child bubbing')
// },{capture:true})

// grandparent.addEventListener("click",()=>{
//     console.log('grandparant bubbing');
// },{capture:false})

// parent.addEventListener("click",()=>{
//     console.log('parent bubbing');

// },{capture:false})

// child.addEventListener("click",()=>{
//     console.log('child bubbing')
// },{capture:false})

// grandparent.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     // console.log('grandparant bubbing');
//     alert('grandparant bubbing');
    
// })

// parent.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     alert('parent bubbing');

// })

// child.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     // console.log('child bubbing')
//     alert('child bubbing');
// })

// grandparent.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     // console.log('grandparant bubbing');
//     console.log('grandparant bubbing');
    
// })

// parent.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     console.log('parent bubbing');

// })

// child.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     // console.log('child bubbing')
//     console.log('child bubbing');
// })

// grandparent.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     // console.log('grandparant bubbing');
//     console.log('grandparant bubbing');
    
// },{once:true})

// parent.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log('parent bubbing');

// },{once:true})

// child.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     // console.log('child bubbing')
//     console.log('child bubbing');
// },{once:true})


// grandparent.addEventListener("mouseenter",()=>{
//     console.log("hovering");
// });

grandparent.addEventListener("mouseover",()=>{
    console.log("hovering");
 });
// parent.addEventListener("mouseover",()=>{
//     console.log("hovering");
// });
// child.addEventListener("mouseover",()=>{
//     console.log("hovering");
// });


// grandparent.addEventListener("mouseout",()=>{
//     console.log("hovering");
//  });

let grandparent = document.querySelector('.grandparent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');


//  grandparent.addEventListener("mouseleave",()=>{
//     console.log("hovering");
//  })



