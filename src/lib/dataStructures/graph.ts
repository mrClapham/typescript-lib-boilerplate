import { createQueue } from './queue';


type node = {
    key: number,
    neighbors: node[],
    addNeighbor(n: node): void
}

type graph = {
    directed: boolean,
    nodes: node[],
    edges: node[],
    addNode(key: string | number): void,
    getNode(key: number): node,
    addEdge(node1key: number | string, node2key: number | string): node,
    print(): string
}

const createNode = (key: number): node => {
    const neighbors = []
    return {
        key,
        neighbors,
        addNeighbor(n: node): void {
            neighbors.push(n)
        }
    }
}


export default (directed: boolean = false): graph => {
    const nodes = []
    const edges = []

    return {
        directed,
        nodes,
        edges,
        addNode(key: number): void {
            nodes.push(createNode(key))
        },
        getNode(key: number): node {
            return nodes.find(node => node.key === key)
        },
        addEdge(node1key: number, node2key: number): node {
            const node1: node = this.getNode(node1key)
            const node2: node = this.getNode(node2key)
            node1.addNeighbor(node2)
            edges.push(`${node1key}-${node2key}`)
            if (!directed) {
                node2.addNeighbor(node1)
            }
            return node1
        },
        print(): string {
            return nodes.map(({ key, neighbors }) => {
                let result = key
                if (neighbors.length) {
                    result += ` => ${neighbors.map(neighbor => neighbor.key).join(' ')}`
                }
                return result
            }).join('/')
        },
        breadthFirstSearch(startingNodeKey: number, visitFn: Function): void {
            const startingNode; nodes = this.getNode(startingNodeKey)
            const visited = nodes.reduce((acc, curr) => { })
        }

    }
}


