class MaxBinaryHeap {
  constructor() {
    this.values = new Array();
  }

  insert(value) {
    this.values.push(value);

    let indexPos = this.values.length - 1;

    while (true) {
      let parentPos = Math.floor((indexPos - 1) / 2);

      if (!this.values[parentPos]) break;

      if (this.values[parentPos] >= this.values[indexPos]) break;

      [this.values[indexPos], this.values[parentPos]] = [
        this.values[(parentPos, this.values[indexPos])],
      ];

      indexPos = parentPos;
    }

    return this;
  }

  extractMax() {
    const lastIndex = this.values.length - 1;

    [this.values[0], this.values[lastIndex]] = [
      this.values[lastIndex],
      this.values[0],
    ];

    let largest = this.values.pop();
    let indexPos = 0;

    while (true) {
      let leftChild = 2 * indexPos + 1;
      let rightChild = 2 * indexPos + 2;

      let swapTo = indexPos;

      if (leftChild < lastIndex) {
        if (this.values[indexPos] < this.values[leftChild]) {
          swapTo = leftChild;
        }
      }

      if (rightChild < lastIndex) {
        if (this.values[rightChild] < this.values[leftChild]) {
          swapTo = rightChild;
        }
      }

      if (swapTo === indexPos) break;

      [this.values[swapTo], this.values[indexPos]] = [
        this.values[indexPos],
        this.values[swapTo],
      ];

      indexPos = swapTo;
    }
    return largest;
  }
}

const heap = new MaxBinaryHeap();

heap.insert(1);
heap.insert(15);
heap.insert(23);
heap.insert(98);
heap.insert(10);

console.log(heap);

console.log(heap.extractMax());
