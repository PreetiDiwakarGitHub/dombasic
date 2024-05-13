let grandparent = document.querySelector('.grandparent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

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

grandparent.addEventListener("click",(e)=>{
    e.stopPropagation();
    // console.log('grandparant bubbing');
    alert('grandparant bubbing');
    
})

parent.addEventListener("click",(e)=>{
    e.stopPropagation();
    alert('parent bubbing');

})

child.addEventListener("click",(e)=>{
    // e.stopPropagation();
    // console.log('child bubbing')
    alert('child bubbing');
})

// grandparent.addEventListener("click",()=>{
//     e.stopPropagation();
//     // console.log('grandparant bubbing');
//     alert('grandparant bubbing');
    
// })

// parent.addEventListener("click",()=>{
//     e.stopPropagation();
//     alert('parent bubbing');

// })

// child.addEventListener("click",()=>{
//     e.stopPropagation();
//     // console.log('child bubbing')
//     alert('child bubbing');
// })