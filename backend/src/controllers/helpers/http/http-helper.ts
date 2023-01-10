import { ServerError } from '../../errors/server.error'
import { HttpResponse } from '../../protocols/http'

export const badRequest = (error: Error | string): HttpResponse => ({
    statusCode: 400,
    body: {
        error: error
    }
})

export const forbidden = (error: Error): HttpResponse => ({
    statusCode: 403,
    body: error
})

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})

export const noContent = (): HttpResponse => ({
    statusCode: 204,
    body: null
})