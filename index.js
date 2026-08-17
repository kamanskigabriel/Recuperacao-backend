import express from "express"
import Router from "./router/contas.js"

use.express(express.json())
app.use("/api/v1/", somar)
app.use("/api/v1/", diminuir)
app.use("/api/v1/", subtrair)
app.use("/api/v1/", dividir)
app.use("/api/v1/", potencia)

app.listen(3000, () => {
  console.log("Servidor esta na porta 3000")  
})
