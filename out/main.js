"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './pages' });
});
app.get('/plus', (req, res) => {
    let { a, b } = req.query;
    res.send("Javab: " + (Number(a) + Number(b)));
});
app.listen(8888, () => {
    console.log('Server is starting on http://localhost:8888');
});
// app.get('/plus',(req,res)=>{
//     let { a,b } = req.query
//     res.send("j: " + (Number(a)+Number(b)))
// })
// app.get('/max',(req,res)=>{
//     let { a,b,c } = req.query
//     res.send('jovap: '+Math.max(Number(a),Number(b),Number(c)) )
// })
