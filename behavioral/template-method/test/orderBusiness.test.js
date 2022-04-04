import { expect, describe, test, jest, beforeEach} from '@jest/globals'
import { OrderBusiness } from '../src/business/orderBusiness.js'
import Order from '../src/entities/order.js'

describe('Test suite for template Method design pattern', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    describe('#OrderBusiness', () => {
        test('execution Order Business without Template Method', () => {
            const order = new Order({
                costumerId: 1,
                amount: 100.000,
                products: [{ description: 'ferrari'}]
            })

            const orderBusiness = new OrderBusiness()
            const isValid = orderBusiness._validateRequiredFields(order)
            expect(isValid).toBeTruthy()

            const result = orderBusiness._create(order)
            expect(result).toBeTruthy()
        })

        test('execution Order Business with Template Method', () => {
            const order = new Order({
                costumerId: 1,
                amount: 100.000,
                products: [{ description: 'ferrari'}]
            })

            const orderBusiness = new OrderBusiness()
            const calledValidationFn = jest.spyOn(
                orderBusiness,
                orderBusiness._validateRequiredFields.name
            )

            const calledCreateFn = jest.spyOn(
                orderBusiness,
                orderBusiness._create.name
            )
            // com template method a sequencia de passos é sempre executada
            //evita a replicacao de lógica
            const result = orderBusiness.create(order)
            expect(result).toBeTruthy()
            expect(calledValidationFn).toHaveBeenCalled()
            expect(calledCreateFn).toHaveBeenCalled()
        })
    })
})