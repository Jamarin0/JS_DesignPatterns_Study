import { expect, describe, test, jest, beforeEach } from '@jest/globals'

import { InjectHttpInterceptor } from './agent.js'
import { Server } from 'http'

const originalHttp = jest.createMockFromModule('http')

describe('HTTP interceptor Agent', () => {
    const eventName = 'request'
    const request = null
    beforeEach(() => jest.clearAllMocks())

    test('should not change header', () => {
        const response = {
            setHeader: jest.fn().mockReturnThis()
        }
        const sereverInstance = new originalHttp.Server()
        sereverInstance.emit(eventName, request, response)
        expect(response.setHeader).not.toHaveBeenCalled()
    })
    test('should activate header interceptor', () => {
        InjectHttpInterceptor()
        const response = {
            setHeader: jest.fn().mockReturnThis()
        }

        const sereverInstance = new Server()
        sereverInstance.emit(eventName, request, response)
        expect(response.setHeader).toHaveBeenCalledWith('X-Instrumented-By', 'jamarino')

    })
})