import "reflect-metadata"
import bodyParser from "body-parser"
import * as swagger from "swagger-express-ts";
import express from 'express'
import GlobalConfiguration from "./utils/globalConfiguration"
import dependencyInjection from "./di"
import middlewares from "./middlewares"
import { AppDataSource } from "./db"

const server = dependencyInjection.getServer()
GlobalConfiguration.loadConfiguration()

const port = GlobalConfiguration.port

server.setConfig((app) => {
    app.use('/api-docs/swagger', express.static('swagger'))
    app.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'))
    app.use(bodyParser.json())
    app.use(swagger.express(
        {
            definition: {
                info: {
                    title: "Api Falzoni Express TS",
                    version: "1.0",
                    description: "Api de serviços com Node.js, Express e TypeScript",
                },
            }
        }
    ))
    
    app.get('/', (req: any, res: any) => {
        res.redirect('api-docs/swagger')
    })
    app.use(express.json())
})

server.setErrorConfig((app) => {
    app.use(middlewares.notFound)
    app.use(middlewares.errorHandler)
})

AppDataSource.initialize().then(async () => {
    console.log("Conectado à base de dados")
    server.build().listen(port, () => {
        console.log(`Aplicação iniciou na porta ${port}`)
    })
}).catch((error) => console.error(error))