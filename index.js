import express from "express"
import router from "./router/contas.js"

use.express(express.json())

app.use("/api/v1/", router)

app.listen(3000, () => {
  console.log("Servidor esta na porta 3000")  
})
