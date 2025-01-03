import bcrypt from "bcrypt"
import { hash } from "crypto"

const passwordUtil = {
    hashPassword(pass: string): string {
        return hash('md5', pass)       
    },
    verifyPassword(password: string, hashPassword: string): boolean {
        return bcrypt.compareSync(password, hashPassword)
    }
}

export default passwordUtil