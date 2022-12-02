//*****création d'n serveur avec Http Module  */
//import au httpModule et le mettre dans une constante
/*const http = require('http')
//request et response du serveur
// request ici c'est l'appel du localhost par son nom:port à travers http 
const server = http.createServer((req,res)=>{
  if (req.url=='/home'){ //idha tlabet menek tjbli l Home 
    res.write("welcome from home \n")//reponse eli hiya welcom  sur  l'appel du serveur 
    }else if(req.url=='/contact')
    {
        res.write("welcome from contact")
    }else if (req.url=='/about'){
        res.write("welcome from about")
    } 
    else {
        res.statusCode=404 //avant write
        res.setHeader('content-type','text/html') //tyype de reponse 
        res.write('not found')
    }
    //res.write("noooo")//envoie de la response 
    
   
  
   res.end()
})
server.listen(5000,()=>{console.log('server run with port 5000')})
*/
/* creation server avec Express JS */ 
 const express= require('express') //import express dans variable et va retourner function de type object 
 const app = express() // express est une fonction 

//creation midlwares
/*
app.use((req,res,next)=>{
    console.log("welcome from home ")
    next() //t3da l midleware men ba3d
})
//creation autre midlwares
app.use((req,res)=>{
    console.log("welcome from about ")
})
*/
//plusieurs middlware en meme ligne 
/*app.use((req,res,next)=>{
    console.log("welcome from home ")
    next() 
},(req,res)=>{
    console.log("welcome from about ")
})
*/
app.use((req,res,next)=>{
   
  console.log('test git ')  
})




 app.listen(3000,()=>console.log('server run on port 3000'))