class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            const currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;
        let newTail = null;
        let current = this.head;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return this;
    }

    shift() {
        if (!this.length) return undefined;
        let current = this.head;
        this.head = current.next;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length) return undefined;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
        }
        return foundNode;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return undefined;

        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        const previousNode = this.get(index - 1);
        const nextNode = previousNode.next;

        const newNode = new Node(value);

        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;

        if (index === 0) return this.shift();

        if (index === this.length) return this.pop();

        const previousNode = this.get(index - 1);
        const removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        removedNode.next = null;
        this.length--;
        return this;
    }

    // 1 -> 2 -> 3 -> 4
    // 1 <- 2 <- 3 <- 4
    reverse() {
        // Saving current head as node
        let node = this.head;
        // Swapping head and tail
        this.head = this.tail;
        this.tail = node;

        let previous = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            
            previous = node;
            node = next;
        }

        return this;
        
    }

}


const mySinglyLinkedList = new SinglyLinkedList();

mySinglyLinkedList.push(2);
mySinglyLinkedList.push(5);
mySinglyLinkedList.push(7);

mySinglyLinkedList.reverse();

console.log(mySinglyLinkedList);

