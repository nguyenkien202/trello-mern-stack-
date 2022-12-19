import express from 'express'
import { mapOrder } from './utillies/Sort';
const app =express()


const hostname ="localhost"
const port =8989;
app.get('/',(req,res)=>{
    res.end('<h1>Create to SERVER SUCCESS</h1>')
})
app.listen(port,hostname,()=>{
  console.log(`hello nguyen kien dev ${hostname}`)
},8989);