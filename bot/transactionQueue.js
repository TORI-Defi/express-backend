/// Holds transactions in queue due to rate limiting



class Queue {
    constructor(transactionObject) {
        this.queue = []; //pouchdb ??
        this.transaction = transactionObject;
        this.length = 0;
    }

    enqueue(){

    }

    dequeue(){

    }
}