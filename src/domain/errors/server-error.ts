export class ServerError extends Error {
  constructor() {
    super('Ops! Ocorreu um erro interno. Tente novamente em breve.')
    this.name = 'ServerError'
  }
}
