import dotenv from 'dotenv'

export default class GlobalConfiguration {
    // Application
    public static port: number

    // Database
    public static dbDriver: string
    public static dbHost: string
    public static dbPort: number
    public static dbUser: string
    public static dbPassword: string
    public static dbName: string
    public static dbSync: boolean
    public static dbLogging: boolean
    public static dbDrop: boolean

    // Email Service
    public static emailHost: string
    public static emailUser: string
    public static emailPassword: string
    public static emailTls: boolean
    public static emailPort: number

    public static loadConfiguration() {
        const env = this.loadEnvironment()

        this.port = env.PORT

        this.dbDriver = env.DATABASE_DRIVER
        this.dbHost = env.DATABASE_HOST
        this.dbPort = env.DATABASE_PORT
        this.dbName = env.DATABASE_NAME
        this.dbUser = env.DATABASE_USERNAME
        this.dbPassword = env.DATABASE_PASSWORD
        this.dbSync = env.DATABASE_SYNCHRONIZE === 'true' ? true : false
        this.dbLogging = env.DATABASE_LOGGING === 'true' ? true : false
        this.dbDrop = env.DATABASE_LOGGING === 'true' ? true : false

        this.emailHost = env.EMAIL_HOST
        this.emailUser = env.EMAIL_USER
        this.emailPassword = env.EMAIL_PASSWORD
        this.emailTls = env.EMAIL_TLS === 'true' ? true : false
        this.emailPort = env.EMAIL_PORT
    }

    // private METHODS
    private static loadEnvironment(): any {
        if(process.env.NODE_ENV !== undefined) {
            dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
        } else {
            dotenv.config()
        }
        return process.env
    }
}