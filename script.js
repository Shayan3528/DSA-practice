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

  insertAt(data,index){
    
    if(index===0){ 
      this.prepend(data);
    }
    const newNode = new Node(data);
    let current = this.head;
    let count = 0;
    let previous;

    while(count < index && current){
      previous = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    previous.next = newNode;
  }

  deleteFromStart(){
    if(!this.head) return;
    this.head = this.head.next;
  }
}

const list = new linkedList();


list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.prepend(10);
list.insertAt(60,3);
list.deleteFromStart()


list.print();
