import { DataSource } from "typeorm";
import GlobalConfiguration from "../utils/globalConfiguration";

GlobalConfiguration.loadConfiguration()

function getDatabaseDriver(env: string | undefined) {
    switch (env) {
        case "mysql":
            return "mysql"
        case "mongo":
        case "mongodb":
            return "mongodb"
        case "postgres":
        case "postgre":
        case "postgresql":
            return "postgres"
        case "oracle":
        case "oracledb":
        case "or":
            return "oracle"
        case "sqlite":
            return "sqlite"
        default:
            return "mssql"
    }
}

function setEntityPath(): string[] {
    const paths: string[] = []

    paths.push("src/domain/entities/sql/**/*.ts")
    if (GlobalConfiguration.dbDriver === "mongodb")
        paths.push("src/domain/entities/mongo/**/*.ts")

    return paths
}

export const AppDataSource = new DataSource({
    type: getDatabaseDriver(GlobalConfiguration.dbDriver),
    host: GlobalConfiguration.dbHost,
    port: GlobalConfiguration.dbPort,
    database: GlobalConfiguration.dbName,
    dropSchema: GlobalConfiguration.dbDrop,
    synchronize: GlobalConfiguration.dbSync,
    logging: GlobalConfiguration.dbLogging,
    entities: setEntityPath()
})