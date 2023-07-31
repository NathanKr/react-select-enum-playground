import {test,expect} from 'vitest';
import {render, screen} from '@testing-library/react'
import App from '../App';


test('GenericEnumBasedSelect exist in App component',()=>{
    render(<App/>)
    expect(screen.getByText('GenericEnumBasedSelect')).toBeTruthy()
})

test('color state : Green exist in App component',()=>{
    render(<App/>)
    expect(screen.getByText('color state : Green')).toBeTruthy()
})


test('country state : England exist in App component',()=>{
    render(<App/>)
    expect(screen.getByText('country state : England')).toBeTruthy()
})
