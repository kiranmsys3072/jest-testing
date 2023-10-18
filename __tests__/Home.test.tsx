import {render,screen} from '@testing-library/react'

import Home from '@/app/page'

describe('Home',()=>{
    it('Should have Docs text',()=>{
        render(<Home/>) //Arrange
    
        const myElement=screen.getByText('Docs')//Action
    
        expect(myElement).toBeInTheDocument() //ASSERT
    
    })

    it('Should have The Text "Information" ',()=>{
        render(<Home/>) //Arrange
    
        const myElement=screen.getByText(/information/i)//Action   //regualr expression "i" case insensitive
    
        expect(myElement).toBeInTheDocument() //ASSERT
    
    })

    //exactly heading element have on Learn  not Learn ......

    it('Should have The Text "Information" ',()=>{
        render(<Home/>) //Arrange
    
        const myElement=screen.getByRole('heading',{
            name:'Learn'
        })//Action   //regualr expression "i" case insensitive
    
        expect(myElement).toBeInTheDocument() //ASSERT
    
    })

})

