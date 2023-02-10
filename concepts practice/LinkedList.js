class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst() {
    return this.head;
  }
  getLastNode() {
    let lastnode = this.head;
    while (lastnode.next) {
      lastnode = lastnode.next;
    }
    return lastnode;
  }
  insertAtEnd(value) {
    const node = new Node(value);
    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = node;
    return this.head;
  }
  insertAtBeginning(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this.head;
  }
  insertAtPos(value, pos) {
    if (pos < 0 || pos > this.size()) return "invalid position";
    if (pos === 0) return this.insertAtBeginning(value);
    if (pos === this.size() - 1) return this.insertAtEnd(value);

    //inserting at middle

    let node = new Node(value);

    let current = this.head;
    let index = 0;
    let previous;
    while (index < pos) {
      previous = current;
      current = current.next;
      index++;
    }
    node.next = current;
    previous.next = node;
    return this.head;
  }
}

let node1 = new Node(2);
let node2 = new Node(3);

node1.next = node2;
let list = new LinkedList(node1);
// console.log(node1, list);
list.insertAtEnd(9);

// console.log(list.size());
console.log(list.insertAtBeginning(1));
// console.log(list.getLastNode())
console.log(list.insertAtPos(106, 0))
