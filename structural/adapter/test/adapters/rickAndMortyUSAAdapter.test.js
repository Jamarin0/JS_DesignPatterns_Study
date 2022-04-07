import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import RickAndMortyUSAAdapter from '../../src/business/adapters/rickAndMortyUSAAdapter'
import RickAndMortyUSA from '../../src/business/integrations/rickAndMortyUSA'

describe('#rickAndMortyUSAAdapter', () => {
    beforeEach(() => jest.clearAllMocks())

    test('#getCharacters should be an adapter for RickAndMoryUSA.getCharactersXML', async () => {
       const USAIntegration = jest.spyOn(
           RickAndMortyUSA,
           RickAndMortyUSA.getCharactersFromXML.name
       ).mockResolvedValue([])

       const result = await RickAndMortyUSAAdapter.getCharacters()

       expect(USAIntegration).toHaveBeenCalled()
    })
})