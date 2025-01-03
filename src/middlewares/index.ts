import logMessenger from "../utils/logMessenger";

const middlewares = {
    notFound: function(req: any, res: any, next: any) {
      let statusCode = 404
      logMessenger.createLogError('Método ou serviço não encontrado')
      const error = { status: statusCode, message: 'Método ou serviço não encontrado'}
      next(error);
    },
  
    errorHandler: function(err: any, req: any, res: any, next: any) {
      if(err.stack !== undefined) {
        logMessenger.createLogError(err.stack)
      }
      res.status(err.status || 400);
      res.json({
        status: res.statusCode,
        message: err.message
      });
    }
  }

  export default middlewares