//server
let serverUrl="ws://"+document.location.hostname+":3000"
let client=new WebSocket(serverUrl);

//DOM ELEMENTS
let fiveHundred=document.getElementById("500");
let thousand=document.getElementById("1000");
let enteredAmt=document.getElementById("input-amount");
let button=document.querySelectorAll("button");
let user_name=document.getElementById("name");
let confirmationBox=document.getElementById("confirmation-box");
let senderName=document.getElementById("senderName");
let senderCoatedAmt=document.getElementById("entered-amt");
let confirmationPassword=document.getElementById("send-password");
let passwordCheck=document.getElementById("password-check");
let sendButton=document.getElementById("send");
let joinToSend=document.getElementById("join-to-send")
let coatedAmt=document.querySelector(".coating-amt");
let errOnPasswordSendButton=document.getElementById("password-para");
let confirmationCancel=document.getElementById("confirmation-cancel");
let individualPay=document.getElementById("individual-pay");
let currentAmt=document.getElementById("cur-amt");
let holderName=document.getElementById("name");
let messageElement="";
let runOnce=1;
let runOnceForJoin=1;
let joined=0;
let curAmt=0;
let authenticationCompleted=0;
let bidHolder="";
let bidHolderPosition=undefined;
let bidHolderIndex=undefined;
let scrollUp=0;

//alert

let width=500;
   
        if(parseInt(window.innerWidth)>=width)
        alert("So far only mobile version is released. For better viewing experience use mobile")
    
//reset
let reset=document.getElementById("reset")

window.addEventListener("load",()=>{
    if(localStorage.getItem("username")==="Arumugam" || localStorage.getItem("username")==="Mullai"){
        reset.style.opacity=1;
    }
})



//calculator
let element=[],i=0,text="",remove;
let calculatorTheme=document.getElementById("pick-one")
let color=document.getElementById("color")
let themeBorder=document.getElementById("outer-layer")
let calsiAnimation=document.getElementsByClassName("full-circle")
let calsiCenter=document.getElementById("calsi-center")
let outerPart=document.getElementById("outer-part");
let equalsButton=document.getElementById("equals")
const res=document.querySelector(".answer")
const numbers=document.getElementsByClassName("keys")
let clr=document.querySelector(".clear")
let edit=document.querySelector(".edit");
let click=0;


//calculator function
edit.addEventListener("click",calErase)
clr.addEventListener("click",calClear)
res.addEventListener("click",calArithmeticOperation)

//transition function

for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",(e)=>{
        if(click===0){
            click++;
            console.log("clicked")
            e.target.style.borderRadius="73% 27% 59% 41% / 57% 59% 41% 41% "
        }
        else{
            click=0;
            e.target.style.borderRadius="35% 65% 31% 39% / 57% 59% 41% 41%"
        }
    })
}

let resclk=0;
res.addEventListener("click",(e)=>{
    
    if(resclk===0){
        resclk++;
        console.log("clicked")
        e.target.style.borderRadius="73% 27% 59% 41% / 57% 59% 41% 41% "
    }
    else{
        resclk=0;
        e.target.style.borderRadius="35% 65% 31% 39% / 57% 59% 41% 41%"
    }
    
})
let clrclk=0
clr.addEventListener("click",(e)=>{
    
    if(clrclk===0){
        clrclk++;
        console.log("clicked")
        e.target.style.borderRadius="35% 65% 31% 39% / 57% 59% 41% 41%"
    }
    else{
        clrclk=0;
        e.target.style.borderRadius="73% 27% 59% 41% / 57% 59% 41% 41%"
    }
    
})

edit.addEventListener("click",(e)=>{
    
    if(click===0){
        click++;
        console.log("clicked")
        e.target.style.borderRadius="73% 27% 59% 41% / 57% 59% 41% 41% "
    }
    else{
        click=0;
        e.target.style.borderRadius="35% 65% 31% 39% / 57% 59% 41% 41%"
    }
    
})

color.addEventListener("click",(e)=>{
    
    if(click===0){
        click++;
        console.log("clicked")
        e.target.style.borderRadius="73% 27% 59% 41% / 57% 59% 41% 41% "
    }
    else{
        click=0;
        e.target.style.borderRadius="35% 65% 31% 39% / 57% 59% 41% 41%"
    }
    
})

equalsButton.addEventListener("click",(e)=>{
    
    if(click===0){
        click++;
        console.log("clicked")
        e.target.style.borderRadius="73% 27% 59% 41% / 57% 59% 41% 41% "
    }
    else{
        click=0;
        e.target.style.borderRadius="35% 65% 31% 39% / 57% 59% 41% 41%"
    }
    
})


for(let i=0;i<numbers.length;i++)
    numbers[i].addEventListener("click",display)
    function display(e){
       element[i++] = e.target.textContent
       text=element.join("");
       document.getElementById('result').textContent=text
     console.log(`---`,element)
    }

    function calArithmeticOperation(e){
        if( text.includes("+")) addition();
        if( text.includes("-")) substraction();
        if(text.includes("*"))multiplication();
        if(text.includes("/")) division();
        // if(text.includes("Pow")) power();
        // if(text.includes("%")) modulas();
    
    }

    function addition(){
        let ans=0;
        console.log(element)
        if(element.includes("=")){
            remove=element.indexOf("=")
            element.splice(remove,1)
            console.log(element,"inside of if")

            let numStr=element.join("");
            let value=numStr.split("+");
             for(let key of value)
                ans+=Number(key); 
                document.getElementById("result").textContent=ans
                element.splice(0,element.length)
                element.splice(0,0,ans)
        }
        else{
            console.log(element)

            let numStr=element.join("");
            let value=numStr.split("+");
             for(let key of value)
                ans+=Number(key); 
                document.getElementById("result").textContent=ans
                element.splice(0,element.length)
                element.splice(0,0,ans)
        }
        }

    function substraction(){
        let ans=0;
        let numStr=element.join("");
        let value=numStr.split("-");
       ans = value.reduce((acc,pre)=>{
            acc=Number(acc)-Number(pre)
            console.log("add")
            return acc
        })
        console.log(ans)
       
            document.getElementById("result").textContent=ans
            element.splice(0,element.length)
            element.splice(0,0,ans)
    }

    function multiplication(){
        let ans=1;
        let numStr=element.join("");
        let value=numStr.split("*");
         for(let key of value)
            ans*=Number(key); 
            document.getElementById("result").textContent=ans
            element.splice(0,element.length)
            element.splice(0,0,ans)    
        }

    function division(){
        let ans=0;
        let numStr=element.join("");
        let value=numStr.split("/");
      ans = value.reduce((acc,pre)=>{
              return Number(acc)/Number(pre)
        })
            document.getElementById("result").textContent=ans
            element.splice(0,element.length)
            element.splice(0,0,ans)
    }

    function calErase(){
        console.log(element)
        element.splice(element.length-1,1)
        let ans=element.join("")

        console.log(element)
        document.getElementById("result").textContent=ans
    }
    function calClear(){
        element.splice(0,element.length)
        console.log(element)
        document.getElementById("result").textContent=""
    }

//calculator theme
calculatorTheme.addEventListener("change",(e)=>{
    console.log(e.target)
    console.log(e)
    themeBorder.style.backgroundColor=e.target.value
    themeBorder.style.borderColor=e.target.value
    calsiCenter.style.borderColor=e.target.value
    outerPart.style.borderColor=e.target.value
    equalsButton.style.backgroundColor=e.target.value
    for(let i=0; i<calsiAnimation.length;i++){
        calsiAnimation[i].style.backgroundColor=e.target.value
    }
})


//users
const userArr=["sakthi","vetri","punniyakotti"];
const passwordArr=["33","44","55"];


//hamburger-menu
let hamburgerMenu=document.querySelector("#hamburger-menu-img")
let thread=document.getElementsByClassName("thread1");
let thread2=document.getElementsByClassName("thread2")
let image=document.getElementsByClassName("menu1");
let image2=document.getElementsByClassName("menu2");
let mail=document.getElementById("contact")
let admin=document.getElementById("admin")
let calculator=document.getElementById("calculator")
let contact=document.getElementById("about")
let rod=document.getElementById("hamburger-menu")
let adminLink=document.getElementById("admin-link")
let calculatorLink=document.getElementById("calculator-link")

let drop=0;



hamburgerMenu.addEventListener("click",()=>{
  
if(drop===0){
drop++;
    mail.style.opacity="1"
    calculator.style.opacity="1"
    admin.style.opacity="1"
    contact.style.opacity="1"
    rod.style.width="100%"
    adminLink.style.pointerEvents="auto"
    calculatorLink.style.pointerEvents="auto"
    console.log(calculatorLink)
for(let i=0;i<thread.length;i++){
  
  thread[i].style.height="150px"
  thread[i].style.transition="all .7s "
}
for(let i=0;i<thread2.length;i++){
image2[i].style.transition="all .7s"
thread2[i].style.height="70px"
thread2[i].style.transition="all .7s"
}

}
else{
drop=0;
    rod.style.width="55px"
    mail.style.opacity="0"
    calculator.style.opacity="0"
    admin.style.opacity="0"
    contact.style.opacity="0"
    adminLink.style.pointerEvents="none"
    calculatorLink.style.pointerEvents="none"


for(let i=0;i<thread.length;i++){
  image[i].style.transition="all .7s"
  thread[i].style.height="0px"
  thread[i].style.transition="all .7s"
}
for(let i=0;i<thread2.length;i++){
image2[i].style.transition="all .7s"
thread2[i].style.height="0px"
thread2[i].style.transition="all .7s"
}

}

})

// window.addEventListener("load",(e)=>{
//     holderName.innerHTML=localStorage.getItem("username")
// })


//reset function
function colorChange(){
    
         reset.style.color="red"
        setTimeout(()=>{
            reset.style.color="black"

        },150)
       
    
}

client.addEventListener("open",()=>{
   
    reset.addEventListener("click",(rst)=>{
       if(localStorage.getItem("username")==="Arumugam" || localStorage.getItem("username")==="Mullai"){
           client.send("reset");
           colorChange();
       }
       
    })

    button.forEach(individual_button=>{
        individual_button.addEventListener("click",(e)=>{
            e.preventDefault();
            if(e.target.value === "500" || e.target.value ==="1000"){
            add(e.target.value);
            }
            if(e.target.value === "send"){ 
                send(enteredAmt.value,localStorage.getItem("username"),client,e.target);
                if(authenticationCompleted===1){
                    authenticationCompleted=0;
                  //  bidHolderName("holder");
                    //currentAmtCalculator("currentAmt");
                     individualpayCalculator("individualPay");
               }
            }
            if(e.target.value === "x"){
                erase();
            }
            // if(e.target.value === "join") join(localStorage.getItem("username"))
        })
    })

    // confirmationCancel.addEventListener("click",()=>{
    //     confirmationBox.style.opacity=0;
    //     sendButton.style.opacity=1;
    //         fiveHundred.style.opacity=1;
    //         thousand.style.opacity=1;
    // })
})

// function join(userName){
    
//     client.send(userName);
//     client.addEventListener("message",(data)=>{
//         if(runOnceForJoin===1)
//         appendJoinMessage(data.data)
//         runOnceForJoin++
//     })
// }



function send(amt,username,client,event){
    if(joined===0){
        event.innerText="Send";
        joined++;
        console.log("joined")
        client.send(username);
        client.addEventListener("message",(data)=>{
           if(runOnceForJoin===1)
            appendJoinMessage(data.data);
            runOnceForJoin++;
        })
        
    }

    if(joined>1){

        senderName.innerText=username
        senderCoatedAmt.innerHTML=amt
        sendButton.style.opacity=0;
        fiveHundred.style.opacity=0;
        thousand.style.opacity=0;
        confirmationBox.style.opacity=1
        thousand.disabled=true;
        fiveHundred.disabled=true;
        confirmationPassword.addEventListener("click",(e)=>{
         e.preventDefault();
        
         
     
        if(passwordCheck.value === localStorage.getItem("password")) {
            messageElement=`${localStorage.getItem("username")}: your bid amount is Rs ${enteredAmt.value}`;
            
            client.send(messageElement);
            if(runOnce===1)
            client.addEventListener("message",(data)=>{
             messageElement=data.data;
             console.log(data.data)
             runOnce++;
             
             bidHolderPosition=messageElement.split(" ")[0];
             bidHolderIndex=bidHolderPosition.indexOf(":");
             bidHolder=bidHolderPosition.slice(0,bidHolderIndex)
             console.log(bidHolderPosition)
             appendMessage(messageElement)
         })
            curAmt=enteredAmt.value;
            confirmationBox.style.opacity=0; 
            sendButton.style.opacity=1;
            fiveHundred.style.opacity=1;
            thousand.style.opacity=1; 
            thousand.disabled=false;
            fiveHundred.disabled=false;
            // console.log(bidHolder,"bidholder",`-->${bidHolderPosition}`)
             //bidHolderName(bidHolder);
            //currentAmtCalculator(curAmt);
            authenticationCompleted++;
        }

       
     
        if(passwordCheck.value !==localStorage.getItem("password")){
              errOnPasswordSendButton.textContent="Error***";
              errOnPasswordSendButton.style.color="red";
              setTimeout(()=>{
                  timeOut();            
              },1500) 
        }
     },{once:true}) //here the run only once attribute for eventlistener is used for running the confirmationPassword once. If we use once:false(by default once:false) it run automatically for each wrong entry after the correct entry is passed. That's why we use once:true.
   //started
     confirmationPassword.addEventListener("click",(e)=>{
        e.preventDefault();

        if(passwordCheck.value === localStorage.getItem("password")){
            
            client.send(enteredAmt.value);
            client.addEventListener("message",(data)=>{
                let str=data.data;
                if(str.charCodeAt(0)>47 && str.charCodeAt(0)<58){
                    enteredAmt.value=data.data
                    
                    
                }
            })
          
             //console.log(curAmt);   //-->current amount value
        }
    })

    //ended
     passwordCheck.value=""
    }
    
    joined++;

    // bidHolderName(client,localStorage.getItem("username"));
    // currentAmtCalculator(curAmt)
    // individualpayCalculator();
   
}

function add(amount){
    let bidAmount=parseInt(amount);
    let inputAmt=parseInt(enteredAmt.value);
    if (inputAmt<50000){
        inputAmt+=bidAmount;
        console.log(enteredAmt.value)
        enteredAmt.value=inputAmt
    }
}

// function bidHolderName(){ 
//     client.send("holder");
//     client.addEventListener("message",(data)=>{
//         let str=data.data;
//         for(let username of userArr ){
//             if(str === username ){

//                 holderName.innerText=data.data
//                  console.log(username," ",str,"  ",userArr)
//             }
//         }
        
//     })
// }


// function currentAmtCalculator(displayCurrentAmt){
//     client.send(displayCurrentAmt);
//     client.addEventListener("message",(data)=>{
//         let amt=data.data;
//         for(let password of passwordArr ){
//             if(amt === password ){
        
//                 currentAmt.innerText=amt
//                  console.log(password," ",amt,"  ",passwordArr)
//             }
//         }
       
//     })
// }


//functions
function timeOut (){
    errOnPasswordSendButton.textContent="Send";
    errOnPasswordSendButton.style.color="black";
    confirmationBox.style.opacity=0; 
    sendButton.style.opacity=1; 
    fiveHundred.style.opacity=1;
    thousand.style.opacity=1;

}

function erase(){
    let amt=parseInt(curAmt);
    console.log("curamt"+amt);
    let inputAmt=parseInt(enteredAmt.value);
    console.log("input amt"+inputAmt)
    if(inputAmt>2000 && inputAmt > amt){
        inputAmt-=500;
        enteredAmt.value=inputAmt;
    }
}


function appendMessage(msg){
    if(msg.length>=25){

        console.log(msg.length)
        const div=document.createElement("div");
        const hr=document.createElement("hr");
        div.style.zIndex="102"
        div.innerText=msg;
        
        coatedAmt.appendChild(div)
        coatedAmt.appendChild(hr)
        
    }
   
}

function appendJoinMessage(msg){
    const div=document.createElement("div");
    div.style.zIndex="102"
    div.innerText=`${msg} joined the group`;
    coatedAmt.appendChild(div)
}


function individualpayCalculator(argu){
    client.send(argu);
    client.addEventListener("message",(data)=>{
       let strArr= data.data.split(" ");
       switch(strArr.length){
           case 1:
               let curBid=strArr[0];
               console.log(curBid," case 1");
               if(curBid !== "individualPay")
               currentAmt.innerText=curBid;
               let bidamt=parseInt(curBid);
               let beat=2000;
               let indPay=2500;
               let reminder=bidamt-beat;
                   reminder/=20;
                individualPay.innerText=indPay-reminder;
               break;    
        case 7:
            let name=strArr[0]
            console.log(name,"case 7");
            holderName.innerText=name.slice(0,name.length-1)
            break;
       }



        //console.log(data.data+" individual pay")
    })
}
// function receiveMsg(){
//     client.addEventListener("message",(data)=>{
//         appendMessage(data.data)
//     })
// }








































// fiveHundred.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let newAmt=parseInt(enteredAmt.value)
//     newAmt+=500;
//     enteredAmt.value=newAmt;
//     console.log((newAmt))
    

// })