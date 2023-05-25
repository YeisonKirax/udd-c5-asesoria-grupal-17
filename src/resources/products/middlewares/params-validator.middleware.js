import { validate } from 'uuid'
export const paramsValidatorMiddleware = ( req, res, next ) => {
  const id = req.params.id
  const isUUID = validate( id )
  if ( !isUUID ) {
    return res.status( 400 ).json( { status: "error", msg: "debe proporcionar el id del producto en la request" } )
  }
  next()
}