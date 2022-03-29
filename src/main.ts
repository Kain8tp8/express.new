import express from 'express'

const app = express()


app.get('/',(req,res)=>{
    res.sendFile('index.html',{ root: './pages' })
})

app.get('/plus',(req,res)=>{
    let { a , b } = req.query
    res.send("Javab: "+(Number(a)+Number(b)))
}) 

app.listen(8888,()=>{
    console.log('Server is starting on http://localhost:8888');
})





































// app.get('/plus',(req,res)=>{
//     let { a,b } = req.query
//     res.send("j: " + (Number(a)+Number(b)))
// })
// app.get('/max',(req,res)=>{
//     let { a,b,c } = req.query
//     res.send('jovap: '+Math.max(Number(a),Number(b),Number(c)) )
// })


