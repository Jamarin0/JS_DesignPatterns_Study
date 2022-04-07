import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import RickAndMortyBRLAdapter from '../../src/business/adapters/rickAndMortyBRLAdapter'
import RickAndMortyBRL from '../../src/business/integrations/rickAndMortyBRL'

describe('#rickAndMortyBRLAdapter', () => {
    beforeEach(() => jest.clearAllMocks())

    test('#getCharacters should be an adapter for RickAndMoryBRL.getCharactersJSON', async () => {
       const brlIntegration = jest.spyOn(
           RickAndMortyBRL,
           RickAndMortyBRL.getCharactersFromJSON.name
       ).mockResolvedValue([])

       const result = await RickAndMortyBRLAdapter.getCharacters()

       expect(brlIntegration).toHaveBeenCalled()
    })
})