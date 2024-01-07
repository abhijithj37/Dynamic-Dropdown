import {describe,it,expect} from 'vitest'
import {tables} from './data.json'

describe("Metadata",()=>{

    it('check if tables is defined',()=>{
        expect(tables).toBeDefined()
    })

    it('Check if metadata contains required items',()=>{
        expect(tables).toEqual(
            [
                {"name": "Countries", "endpoint": "/api/country"},
                {"name": "States", "endpoint": "/api/state"},
                {"name": "Cities", "endpoint": "/api/city"},
                {"name": "Blocks", "endpoint": "/api/block"},
                {"name": "Villages", "endpoint": "/api/village"}
              ]
        )
    })

})