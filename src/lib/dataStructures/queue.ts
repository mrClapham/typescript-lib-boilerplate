export const createQueue = () => {
    const queue = []
    return {
        enque(item) {
            queue.unshift(item);
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length - 1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0
        }
    }

}