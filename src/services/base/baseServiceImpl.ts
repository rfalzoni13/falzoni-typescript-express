import BaseService from "../../domain/interfaces/services/base/baseService";
import { randomUUID } from "crypto";
import BaseRepository from "../../domain/interfaces/repositories/base/baseRepository";
import { BaseDto } from "../../domain/dto/base/baseDto";
import { BaseEntity } from "../../domain/interfaces/entities/base/baseEntity";
import logMessenger from "../../utils/logMessenger";

export default class BaseServiceImpl<TDto extends BaseDto, TEntity extends BaseEntity> implements BaseService<TDto, TEntity> {
    constructor(private repository: BaseRepository<TEntity>) {
    }

    async getAll(): Promise<TDto[]> {
        try {
            logMessenger.createLogInfo("Executando serviço de listagem")
            const list = await this.repository.getAll()
            logMessenger.createLogSuccess("Registros obtidos com sucesso!")
            logMessenger.createLogInfo("Retornando requisição...")
            return list.map((i) => Object.assign(i))
        } catch(e: any) {
            logMessenger.createLogWarning("Erro ao executar serviço!")
            throw e
        }
    }
    
    async get(id: any): Promise<TDto> {
        try {
            logMessenger.createLogInfo("Executando serviço de listagem por id de registro")
            const obj = await this.repository.get(id)
            logMessenger.createLogSuccess("Registro obtido com sucesso!")
            logMessenger.createLogInfo("Retornando requisição...")
            return Object.assign(obj)
        } catch(e: any) {
            logMessenger.createLogWarning("Erro ao executar serviço!")
            throw e
        }
    } 

    async create(obj: TDto): Promise<void> {
        try {
            logMessenger.createLogInfo("Executando serviço de criação de registro")
            obj.id = randomUUID()
            logMessenger.createLogInfo(`Gerado o id de registro: ${obj.id}`)

            logMessenger.createLogInfo("Realizando conversão de objeto para persistência de dados")
            const data: TEntity = Object.assign(obj)

            logMessenger.createLogSuccess("Inserindo registro...")
            return await this.repository.create(data)
        } catch(e: any) {
            logMessenger.createLogWarning("Erro ao executar serviço!")
            throw e
        }        
    }

    async update(obj: TDto): Promise<void> {
        try {
            logMessenger.createLogInfo("Executando serviço de atualização de registro")

            logMessenger.createLogInfo("Realizando conversão de objeto para persistência de dados")
            const data: TEntity = Object.assign(obj)

            logMessenger.createLogSuccess("Atualizando registro...")
            return await this.repository.update(data)
        } catch(e: any) {
            logMessenger.createLogWarning("Erro ao executar serviço!")
            throw e
        }
    }

    async delete(id: any): Promise<void> {
        try {
            logMessenger.createLogInfo("Executando serviço de remoção de registro")

            logMessenger.createLogSuccess("Removendo registro...")
            return await this.repository.delete(id)
        } catch(e: any) {
            logMessenger.createLogWarning("Erro ao executar serviço!")
            throw e
        }        
    }
}