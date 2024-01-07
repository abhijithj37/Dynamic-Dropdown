import {describe,it,expect} from 'vitest'
import { TABLES_API } from './axios'


describe("TABLES_API URL",()=>{

    it('Check if URL is correct',()=>{
        expect(TABLES_API).toBe('http://localhost:4000')
    })

})