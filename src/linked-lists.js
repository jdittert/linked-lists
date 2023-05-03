import Node from "./node";

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node();
        node.value = value;
        if (!this.head) this.head = node;
        else if (!this.tail) {
            this.head.next = node.value;
            this.tail = node;
        }
        else {
            const temp = this.tail.value;
            this.tail.next = node.value;
            const tempNode = {[temp]:this.tail};
            Object.assign(this, tempNode);            
            delete this.tail;
            this.tail = node;
        }
    }

    prepend(value) {
        const node = new Node();
        node.value = value;
        if (!this.head) this.head = node;
        else {
            const temp = this.head.value;
            node.next = temp;
            this.head = this[temp];
            this.head = node;
        }
    }
}