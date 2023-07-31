import {test,expect} from 'vitest'
import { getEnumKeyValues } from '../lib/utils';
import { Color } from '../types/e-color';

// test('just check it is working',()=>{
//     expect(1).toBe(1)
// })

test('getEnumKeyValues is ok for Color',()=>{
    const array = getEnumKeyValues(Color);
    expect(array.length).toBe(3);
    expect(array[0].key).toBe('red');
    expect(array[1].key).toBe('green');
    expect(array[2].key).toBe('blue');
    expect(array[0].value).toBe('Red');
    expect(array[1].value).toBe('Green');
    expect(array[2].value).toBe('Blue');
})