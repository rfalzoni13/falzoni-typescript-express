const userSchema = {
    title: 'User',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'Id de registro',
            format: 'uuid',
            example: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
            readonly: true
        },
        fullName: {
            type: 'string',
            description: 'Nome completo do usuário',
            example: 'User Test'
        },
        userName: {
            type: 'string',
            description: 'Apelido do usuário',
            example: 'userTest'
        },
        email: {
            type: 'string',
            description: 'E-mail do usuário',
            example: 'user@test.com'
        },
        phoneNumber: {
            type: 'string',
            description: 'E-mail do usuário',
            example: '(11) 99999-7777'
        },
        password: {
            type: 'string',
            description: 'Senha do usuário',
            example: '123456'
        }
    },
    additionalProperties: false,
    description: 'Objeto do usuário'
}

export default userSchema