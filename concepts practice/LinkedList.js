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
  add(value) {
    const node = new Node(value);
    let pointer = this.head;
    while (pointer.next) {
        pointer = pointer.next
    }
    pointer.next = value
  }
}

let node1 = new Node(2);
let node2 = new Node(3);

node1.next = node2;
let list = new LinkedList(node1);
// console.log(node1, list);
list.add(9)

console.log(list.size(), list);
