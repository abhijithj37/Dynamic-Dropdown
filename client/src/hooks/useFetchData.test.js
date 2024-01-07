import {describe,it,expect} from 'vitest'
import useFetchData from './useFetchData'
import { renderHook } from '@testing-library/react'
import axios from '../api/axios'



describe("useFetchData",()=>{
    const {result}=  renderHook(useFetchData)
    const {fetchData}=result.current

    it('test useFetch Data',()=>{
      expect(fetchData).toBeDefined()

    })
    it('check if API returns data',async()=>{
        const {data}=await axios.get('/api/country')
        expect(data[0]).toHaveProperty('name')
        expect(data[0]).toHaveProperty('id')
    })
    

})