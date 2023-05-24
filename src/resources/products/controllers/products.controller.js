import { v4 as generateUUID } from 'uuid'
const products = []

export const createProduct = ( req, res ) => {
  const body = req.body
  const id = generateUUID()
  body[ "id" ] = id
  products.push( body )
  const productCreated = products.find( product => product.id === id )
  return res.status( 201 ).json( productCreated )
}

export const getProducts = ( req, res ) => {
  return res.status( 200 ).json( products )
}
export const getProductById = ( req, res ) => {
  const id = req.params.id
  const productFound = products.find( product => product.id === id )
  if ( !productFound )
    return res.status( 404 ).json( { status: "error", msg: "producto no encontrado" } )
  return res.status( 200 ).json( productFound )
}

export const updateProductById = ( req, res ) => {
  const id = req.params.id
  const body = req.body
  const productFound = products.find( product => product.id === id )
  if ( !productFound )
    return res.status( 404 ).json( { status: "error", msg: "producto no encontrado" } )
  const productIndex = products.findIndex( product => product.id === id )
  products[ productIndex ] = body
  return res.status( 200 ).json( products[ productIndex ] )
}

export const deleteById = ( req, res ) => {
  const id = req.params.id
  const productFound = products.find( product => product.id === id )
  if ( !productFound )
    return res.status( 404 ).json( { status: "error", msg: "producto no encontrado" } )
  const productIndex = products.findIndex( product => product.id === id )
  const productsRemoved = products.splice( productIndex, 1 )
  return res.status( 200 ).json( productsRemoved[ 0 ] )
}