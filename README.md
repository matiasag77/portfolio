# 🧠 Fintual - Prueba Técnica

## 📋 Requerimiento

Construct a simple Portfolio class that has a collection of Stocks.  
`Construya una simple clase de Portfolio que contenga una colección de Stocks.`

Assume each Stock has a “Current Price” method that receives the last available price.  
`Asume que cada Stock tiene un método de "Current Price" que recibe el último precio disponible.`

Also, the Portfolio class has a collection of “allocated” Stocks  
that represents the distribution of the Stocks the Portfolio is aiming  
(i.e. 40% META, 60% AAPL)  

`Además, la clase Portfolio tiene un array de Stocks "allocated"`  
`que representa la distribución de las Stocks a las que apunta el Portfolio`  
`(es decir, 40 % META, 60 % AAPL).`

Provide a portfolio rebalance method to know which Stocks should be sold and which ones should be bought  
`Proveer un método de rebalance en Portfolio para saber cuál Stock conviene vender y cuáles comprar`  

to have a balanced Portfolio based on the portfolio’s allocation.  
`para tener un Portfolio balanceado según la allocation del Portfolio.`

Add documentation/comments to understand your thinking process and solution.  
`Agregar documentación/comentarios para entender tu razonamiento y solución.`

Important: If you use LLMs that’s ok, but you must share the conversations.  
`Importante: Si usás LLMs está bien, pero debés compartir las conversaciones.`

https://chatgpt.com/share/6836b556-50d8-8007-82e3-9917ce15a26c

---

## ✅ Solución

La solución consiste en tres archivos:

- `stock.js`: Define la clase `Stock`, con su precio actual.
- `portfolio.js`: Define la clase `Portfolio`, que mantiene el registro de stocks, sus cantidades y su asignación objetivo.
- `index.js`: Script de ejemplo para inicializar, poblar y usar el portafolio.

---

## 📦 Estructura del portafolio

- `holdings`: array de `{ symbol, quantity }` cantiadad de acciones.
- `targetAllocations`: array de `{ symbol, percentage }` que indica porcentaje objetivo.
- `stockRegistry`: array de `{ symbol, stock }` instancias registradas de `Stock`.

---

