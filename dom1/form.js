function validateForm(){
    let returnval = ture;
    let name = document.forms["myForm"]["fname"].value;
    if(name.length<3){
        seterror("name","length of name is too short");
        returnval = false;
    }

    let email = document.forms["myForm"]["femail"].value;
    if(!email.endWith(".com")){
        seterror("email", "Email is not valid");
        returnval = false;
    }
    return returnval;
}

function seterror(id,error){
    let element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}