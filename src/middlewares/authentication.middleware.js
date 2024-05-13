import jwt from 'jsonwebtoken'

export function authenticationMiddleware(req, res, next) {
    const authorization = req.headers.authorization

    if (!authorization) {
        return res.status(401).json({ message: 'Invalid token.' })
    }
    const [, token] = authorization.split(' ')
    if (!token) {
        return res.status(401).json({ message: 'Invalid token.' })
    }

    try {
        jwt.verify(token, 'Eduardo')

        const decoded = jwt.decode(token)
        console.log('decoded', decoded);
        req.user = decoded;

        next()
    } catch (e) {
        return res.status(401).json({ message: 'Invalid token.' })
    }

}