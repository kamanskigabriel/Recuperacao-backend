
import router from './router/contas'
import banco from '../repository/banco'

const app = express()
app.use(express())
//--------------------------------------------------
app.get("/somar", (req, res) => {
    const { num1, num2} = req.body
    const resultado = Number(num1) + Number(num2)
})
//--------------------------------------------------
app.post("/diminuir", (req, res) => {
    const { num1, num2} = req.body
    const resultado = Number(num1) - Number(num2)
})
//--------------------------------------------------
app.post("/subtrair", (req, res) => {
    const { num1, num2} = req.body
    const resultado = Number(num1) / Number(num2)
})
//--------------------------------------------------
app.post("/multiplicar", (req, res) => {
    const { num1, num2} = req.body
    const resultado = Number(num1) * Number(num2)
})
//--------------------------------------------------
app.post("/potencia", (req, res) => {
    const { num1, num2} = req.body
    const resultado = Number(num1) * Number(num1)
})
//--------------------------------------------------
app.listen(3000, {} = (
  console.log("Servidor esta na porta 3000")  
))
export default Router