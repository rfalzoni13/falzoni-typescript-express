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

        this.emailHost = env.EMAIL_HOST
        this.emailUser = env.EMAIL_USER
        this.emailPassword = env.EMAIL_PASSWORD
        this.emailTls = env.EMAIL_TLS
        this.emailPort = env.EMAIL_PORT
    }

    // private METHODS
    private static loadEnvironment(): any {
        dotenv.config()

        return process.env
    }
}