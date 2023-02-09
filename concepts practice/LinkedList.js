class Node{
    constructor(data, next=null){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }
}

let node1 = new Node(2)
let node2 = new Node(3)
node1.next = node2
console.log(node1);