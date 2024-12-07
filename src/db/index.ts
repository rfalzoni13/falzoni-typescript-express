import { DataSource } from "typeorm";
import GlobalConfiguration from "../utils/globalConfiguration";

GlobalConfiguration.loadConfiguration()

function getDatabaseDriver(env: string | undefined) {
    switch(env) {
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
        default:
            return "mssql"
    }
}

export const AppDataSource = new DataSource({
    type: getDatabaseDriver(GlobalConfiguration.dbDriver),
    host: GlobalConfiguration.dbHost,
    port: GlobalConfiguration.dbPort,
    database: GlobalConfiguration.dbName,
    synchronize: true,
    logging: false,
    entities: ["src/domain/**/*.ts"]
})