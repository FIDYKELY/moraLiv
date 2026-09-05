import jwt from 'jsonwebtoken'

export const authenticate = (req, res, next) => {
    const token = req.cookies.token

    if(!token){
       return res.status(401).json({
            message: 'Authentification requise'
        })
    }
   try {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
    req.user = verifyToken
    next()
   } catch (error) {
        console.error('Erreur JWT :', error)
        return res.status(401).json({
            message: 'Token invalide ou expiré'
        })
   }
}