export default class ApplicationError extends Error {
    private status: any

    constructor(message: string, status: any) {
        super(message)
        this.status = status
    }
}