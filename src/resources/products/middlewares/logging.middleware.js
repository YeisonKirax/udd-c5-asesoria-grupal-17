export const loggingMiddleware = ( req, res, next ) => {
  const body = req.body
  console.log( body )
  next()
}