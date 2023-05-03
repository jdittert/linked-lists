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
            this.tail.next = 'tail';
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
            this[temp] = this.head;
            this.head = node;
        }
    }

    size() {
        const keys = Object.keys(this);
        return keys.length;
    }

    listHead() {
        return this.head;
    }

    listTail() {
        return this.tail;
    }

    at(index) {
        if (index === 0) return this.head;
        if (index > Object.keys(this).length - 1) return undefined;
        let temp = this.head.next;
        let i = 0;
        while (i < (index - 1)) {
            temp = this[temp].next;
            i++;
        }
        return this[temp];                
    }
}