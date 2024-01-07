import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/vitest'
import App from './App'


describe("App",()=>{

    it('Checking Component rendered',()=>{
    render(<App/>)
    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    })

})
