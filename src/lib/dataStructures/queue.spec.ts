import { createQueue } from './queue';

describe('queue', () => {
    describe('is queue', () => {
        it('isEmpty', () => {
            const q = createQueue();
            expect(q.isEmpty()).toEqual(true)
        })
    })

    describe('enque', () => {
        const q = createQueue()
        q.enque('first q')
        q.enque('second q')
        q.enque('third q')
        const dq = q.dequeue()
        expect(dq).toEqual('first q')
        expect(q.peek()).toEqual('second q')
        expect(q.length).toEqual(2)
    })
})