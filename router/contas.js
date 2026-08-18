import banco from '../repository/banco'
import express from 'express'

const router = express.Router()
//--------------------------------------------------
router.get("/somar", (req, res) => {
    const { num1, num2} = req.body
    const resultado = Number(num1) + Number(num2)

    res.status(200).send({ message: resultado})
})
//--------------------------------------------------
router.post("/diminuir", (req, res) => {
    const { num1, num2} = req.body
    const resultado = Number(num1) - Number(num2)
})
//--------------------------------------------------
router.post("/subtrair", (req, res) => {
    const { num1, num2} = req.body
    const resultado = Number(num1) / Number(num2)
})
//--------------------------------------------------
router.post("/multiplicar", (req, res) => {
    const { num1, num2} = req.body
    const resultado = Number(num1) * Number(num2)
})
//--------------------------------------------------
router.post("/potencia", (req, res) => {
    const { num1, num2} = req.body
    const resultado = Number(num1) ** Number(num1)

    
})

export default Router