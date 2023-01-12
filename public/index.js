let userName=document.getElementById("user-name");
let password=document.getElementById("pass-code");
let submit=document.getElementById("submit");
let italic=document.getElementById("italic");
let url=document.getElementById("proceed")
let security={
    user:["Mullai","Nalini","Amudha","Gayathri","Manimegalai","Arunagiri","Arumugam","Ganapathy","Yasotha","Sathishbabu","Sekar","Malarvizhi","Surendhar","vasantha","Vidhya","Perumal","Manikandan","Company"],
    passcode:["9130","2040","6453","2239","1313","3042","8688","0606","0101","0202","0303","0404","0505","4552","3839","3042","7754","0707","1234","0808"]
}
submit.addEventListener("click" ,(e)=>{
    e.preventDefault();
    if(userName.value !=="" && password.value!=="") {
        security["user"].forEach((username,index) =>
        {
            let indexOfUser=parseInt(index)
            if(username === userName.value) {
                security["passcode"].forEach((passcode,index)=>{
                    if(passcode === password.value){
                        let indexOfPassword=parseInt(index)
                        console.log(indexOfPassword,indexOfUser)
                        if(indexOfPassword===indexOfUser){

                            url.style.opacity=1;
                            localStorage.setItem("username",userName.value)
                            localStorage.setItem("password",password.value)
                        }
                    }
                 }) 
             }
            })
    }
    if(userName.value==="" || password.value===""){
        
        italic.style.opacity=1
        setTimeout(timer,2000);
        function timer(){
            italic.style.opacity=0
        }
    }
    userName.value="";
    password.value="";
    
})