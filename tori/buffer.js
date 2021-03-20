class Buffer {
    constructor(size) {
      this.memory = new Array(size);
      this.head = 0;
      this.tail = 0;
      this.isFull = false;
    }
    
    read() {
      if (this.tail === this.head && !this.isFull) {
        console.log('Nothing to read.');
      } else {
        this.tail = this.next(this.tail);
        this.isFull = false;
        return this.memory[this.tail];
      }
    }
    
    write(value) {
      if (this.isFull) {
        console.error('Buffer full');
        return;
      } else {
        this.head = this.next(this.head);
        this.memory[this.head] = value;
        if (this.head === this.tail) {
          this.isFull = true;
        }
      }
    }
    
    next(n) {
      var nxt = n + 1;
      if (nxt === this.memory.length) {
        return 0;
      } else {
        return nxt;
      }
    
  }
}

module.exports = Buffer;  

// const buffer = new Buffer(10);



