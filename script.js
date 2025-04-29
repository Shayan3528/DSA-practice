class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}

const list = new linkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.prepend(4);
list.prepend(100000);
list.print();
