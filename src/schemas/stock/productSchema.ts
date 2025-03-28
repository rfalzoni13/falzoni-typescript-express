const productSchema = {
    title: 'Product',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'Id de registro',
            format: 'uuid',
            example: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
            readonly: true
        },
        name: {
            type: 'string',
            description: 'Nome do produto',
            example: 'Notebook Gamer'
        },
        price: {
            type: 'number',
            format: 'decimal',
            description: 'Preço do produto',
            example: 100.00
        },
        discount: {
            type: 'number',
            format: 'decimal',
            description: 'Valor do desconto',
            example: 5.00
        },
        created: {
            type: 'string',
            format: 'date-time',
            description: 'Data de criação de registro',
            example: '2025-01-05T19:31:55.000'
        },
        modified: {
            type: 'string',
            description: 'Data de modificação de registro',
            example: '2025-02-10T14:56:39.000'
        }
    },
    additionalProperties: false,
    description: 'Objeto do produto'
}

export default productSchema