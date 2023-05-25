import cors from 'cors';
import express from 'express';
import environment from "./config/environment.js";
import productsRouter from './resources/products/routes/products.routes.js';

const { PORT } = environment

const app = express()
app.use( express.json() )
app.use( cors() )

app.get( '/', function ( req, res ) {
  return res.send( "Hola a todos" )
} )

// Rutas de los recursos
app.use(productsRouter)

app.listen( PORT, () => {
  console.log( `APLICACIÓN INICIARÁ EN EL PUERTO ${ PORT }` )
} )