const middlewares = {
    notFound: function(req: any, res: any, next: any) {
      let statusCode = 404
      const error = { status: statusCode, message: 'Método ou serviço não encontrado'}
      next(error);
    },
  
    errorHandler: function(err: any, req: any, res: any, next: any) {
      res.status(err.status || 400);
      res.json({
        status: res.statusCode,
        message: err.message,
        stackTrace: err.stack
      });
    }
  }

  export default middlewares