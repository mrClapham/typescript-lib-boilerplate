import createGraph from './graph';

describe('graph', () => {
    it('Should print out a string', () => {
        const g = createGraph()
        g.addNode('Graham')
        g.addNode('Kim')
        g.addNode('Oscar')
        g.addNode('Celeste')

        g.addEdge('Graham', 'Kim')
        g.addEdge('Oscar', 'Kim')
        g.addEdge('Kim', 'Graham')

        const s = g.print();
        expect(s).toEqual("Graham => Kim Kim/Kim => Graham Oscar Graham/Oscar => Kim/Celeste");

    })
})