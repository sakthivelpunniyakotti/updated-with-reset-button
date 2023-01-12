const websockets=require("ws");
const http=require("http");
const express=require("express");
const { WebSocket } = require("ws");
const path=require("path");
const app=express();
const server1=http.createServer(app);
const wss=new websockets.Server({server:server1});
let curAmt=0;
let runLoop=0;
let proceed=0;
let bidholder="";
let delIndex=undefined;
Const PORT=process.env.PORT || 3000


wss.on("connection",(ws)=>{

 let i=0
  ws.on("message",(msg)=>{
// reset operation started
    if(msg.toString("ascii")==="reset"){ 
      console.log(msg.toString("ascii"))
      curAmt=0;
      console.log(curAmt)
    }
// reset operarion ended     
    if(msg.toString("ascii").split(" ").length===7){

      let strArr= msg
      .toString("ascii")
      .split(" ");
      // bidholder=msg
      // .toString("ascii")
      // .split(" ")[0];
    if(curAmt< parseInt(strArr[6])){
      curAmt=strArr[6];
      delIndex=strArr[0].indexOf(":");
      bidholder=strArr[0].slice(0,delIndex)
      runLoop++;
    }
    else
    ws.send(`your bid amount(${strArr[6]}) is less then or equal to the current amount(${curAmt}) of ${bidholder}`)
    }
    else 
     runLoop++


   if(runLoop===1){
      runLoop=0
      if(msg.toString("ascii").length===1){
        let enteredValue= parseInt (msg.toString("ascii"))
        let currentAmt=parseInt(curAmt)
        console.log(enteredValue,`entered amt`)
        console.log(currentAmt,`current amt`)
        if(enteredValue>=currentAmt){
          proceed++
        }
      }
      else{
wss.clients.forEach(client =>{

  if(  client.readyState === WebSocket.OPEN){
    client.send(msg.toString("ascii"))
    i++
    console.log(msg.toString("ascii",`---entered amt`))
  }
})
      }
      wss.clients.forEach( client =>{ 
        if(proceed===1){
          proceed=0
          if(  client.readyState === WebSocket.OPEN){
            client.send(msg.toString("ascii"))
            i++
            console.log(msg.toString("ascii",`current amt ${curAmt}`))
          }
        }
       
      })
    }

    //if(msg.toString("ascii") === "individualPay"){

     // if(msg.toString("ascii")==="holder" ){
        // wss.clients.forEach(client =>{
        //    let bidamt=parseInt(curAmt);
        //    let beat=2000;
        //    let indPay=2500;
        //    let reminder=bidamt-beat;
        //    reminder/=20;
        //    let result=indPay-reminder;

        //   if(  client.readyState === WebSocket.OPEN){
        //     client.send(result)
            
        //   }
        // })

      //}

      //  if(msg.toString("ascii")==="currentAmt"){
      //   wss.clients.forEach(client =>{

      //     if(  client.readyState === WebSocket.OPEN){
      //       client.send(curAmt)
            
            
      //     }
      //   })

      // }

    //}

  })
  // ws.on("bidHolder",(name)=>{
  //   console.log("bidholder")
  //   wss.clients.forEach(client =>{
  //     if(client.readyState === WebSocket.OPEN){
  //        client.send(name.toString("ascii"))
  //     }
  //   })
  // })
  
})
// client !==ws && client.readyState === WebSocket.OPEN
app.set("views",path.join(__dirname,"views"))
app.set("view-engine", "ejs")

// app.use(express.static("public",()=>{
//   console.log("serveing the static files")
// }))

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
  res.render("index.ejs")
})

app.get("/homePageIndex",(req,res)=>{
  res.render("homePageIndex.ejs")
})




server1.listen(PORT,()=>{
  console.log("connected by express server")
})

