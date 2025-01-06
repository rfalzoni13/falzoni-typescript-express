import "reflect-metadata"
import bodyParser from "body-parser"
import express, { Response } from 'express'
import GlobalConfiguration from "./utils/globalConfiguration"
import dependencyInjection from "./di"
import middlewares from "./middlewares"
import { AppDataSource } from "./db"
import logMessenger from "./utils/logMessenger";
import { Server } from "http";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swagger"


logMessenger.createLogInfo("Iniciando aplicação")
logMessenger.createLogInfo("Inserindo dependências")
const inversifyServer = dependencyInjection.getInversifyServer()

logMessenger.createLogInfo("Carregando configurações de ambiente")
GlobalConfiguration.loadConfiguration()
const port = GlobalConfiguration.port

logMessenger.createLogInfo("Configurando o servidor")
inversifyServer.setConfig((app) => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get("/", (req: any , res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
      });
    app.use(bodyParser.json())
    app.use(express.json())
})

inversifyServer.setErrorConfig((app) => {
    app.use(middlewares.notFound)
    app.use(middlewares.errorHandler)
})

const server = getServerApplication()

server.on('listening', () => {
    logMessenger.createLogInfo("Inciando conexão com o banco de dados")
    AppDataSource.initialize().then(async () => {
        logMessenger.createLogSuccess("Conectado à base de dados")
    }).catch((error) => {
        logMessenger.createLogError(`Erro ao conectar: ${error.message}`)
    })
})

process.on('SIGTERM', () => shutdown())
process.on('SIGINT', () => shutdown())
process.on('SIGKILL', () => shutdown())
process.on('SIGQUIT', () => shutdown())
process.on('SIGHUP', () => shutdown())

function shutdown(): void {
    server.close((_) => {
        if(AppDataSource.isInitialized) {
            AppDataSource.destroy().then(() => {
                logMessenger.createLogWarning("Conexão com o banco de dados finalizada")
            })
        }
        logMessenger.createLogWarning(`Encerrando servidor...`)
    })
}

function getServerApplication(): Server {
    return inversifyServer.build().listen(port, () => {
        logMessenger.createLogSuccess(`Aplicação iniciou na porta ${port}`)
    })
}
