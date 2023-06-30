// Creating a simple tree

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);

const child4 = new Node(5);
const child5 = new Node(6);
const child6 = new Node(7);

root.addChild(child1);
root.addChild(child2);
root.addChild(child3);

child4.addChild(child5);

console.log(root);

