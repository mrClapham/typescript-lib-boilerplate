import { isArray } from './playground';


describe('playground', () => {
    describe('isArray', () => {
        const arr = [1, 2, 3]
        const ob = { hello: 'world' }
        const st = 'hello'
        const bool = true
        const num = 12
        it('Should recognise an Array', () => {
            expect(isArray(arr)).toEqual(true)
            expect(isArray(ob)).toEqual(false)
            expect(isArray(st)).toEqual(false)
            expect(isArray(bool)).toEqual(false)
            expect(isArray(num)).toEqual(false)
        })
    })
})