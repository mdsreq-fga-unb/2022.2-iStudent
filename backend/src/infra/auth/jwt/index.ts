import jwt from 'jsonwebtoken'

export function sign(payload: string | object){
    return jwt.sign(payload,process.env.JWT_SECRET)
}

export function verify(token: string){
    try {
        return jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
        throw new Error('Invalid JWT token')
    }
}