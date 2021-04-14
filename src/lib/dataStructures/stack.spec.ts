import stack from './stack'


describe('stack', () => {
    it('Should push  items', () => {
        const lowerBodyStack = stack()
        lowerBodyStack.push('keks')
        lowerBodyStack.push('socks')
        lowerBodyStack.push('strides')
        expect(lowerBodyStack.pop()).toEqual('strides')
        expect(lowerBodyStack.peek()).toEqual('socks')
    })
})