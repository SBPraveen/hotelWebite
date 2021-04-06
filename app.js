let logInBtn = document.querySelector("#patient_login_btn");

logInBtn.addEventListener("click",()=>{

    let userName = document.querySelector(".userSign");
    let userPssd = document.querySelector(".userPssd");

    //login code backend

    if (userName.value !=`1234` & userPssd.value !=`1234`){
        alert(`Invalid username/password`);
    } 

});


let registerName = document.querySelector('.registerName');
let registerDob = document.querySelector('.registerDob');
let registerEmail = document.querySelector('.registerEmail');
let registerPhNo = document.querySelector('.registerPhNo');
let registerPssd = document.querySelector('.registerPssd');
let registerSubmit = document.querySelector('.btn_reg');
let registerGender;

function myFunction(gender){
    registerGender = gender;
}

registerSubmit.addEventListener('click',()=>{

    //code for backend registration

    console.log(registerName.value, registerDob.value, registerEmail.value, registerPhNo.value, registerGender,registerPssd.value);
    alert(`Registered Successfully !!`);
    registerName.value = "";
    registerDob.value = "";
    registerEmail.value = "";
    registerPhNo.value = "";
    registerPssd.value = "";
    registerSubmit.value = "";
});



