export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum RequestDomain {
  GET = 'GET',
  Localhost = 'http://localhost:3000/',
}

export interface IRequestParam {
  id: string
  key: string
  value: string
}
