import { Router } from 'express'
import { createProduct, deleteById, getProductById, getProducts, updateProductById } from '../controllers/products.controller.js'

const productsRouter = Router()

//http://localhost:4000/products
const baseURI = '/products'

/* 
  Se configura según el estandar REST los verbos HTTP 
  a vincular para realizar las operaciones CRUD. 
  Los handlers de cada verbo HTTP se deben construir en el controller
  y luego agregarlos aca.

  VERBO HTTP              CRUD          Controller handler
     POST      --------> CREATE --------> createProduct
     GET       --------> READ   --------> getProducts / getProductById
     PUT/PATCH --------> UPDATE --------> updateProductById
     DELETE    --------> DELETE --------> deleteProductById
*/
productsRouter.post( baseURI, createProduct )
productsRouter.get( baseURI, getProducts )
productsRouter.get( `${ baseURI }/:id`, getProductById )
productsRouter.put( `${ baseURI }/:id`, updateProductById )
productsRouter.patch( `${ baseURI }/:id` )
productsRouter.delete( `${ baseURI }/:id`, deleteById )

export default productsRouter